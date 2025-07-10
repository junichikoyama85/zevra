'use client';
import { useState, useEffect, useMemo } from 'react';
import { useMswReady } from '../../hooks/useMswReady';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiX } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const isMswReady = useMswReady();

  // 商品データ取得
  useEffect(() => {
    if (!isMswReady) return;

    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error('商品の取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [isMswReady]);

  // 検索フィルタリング
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return allProducts;
    const query = searchQuery.toLowerCase();
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }, [allProducts, searchQuery]);

  // 検索実行処理
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchActive(true);
      filteredProducts
    }
  };

  // 検索リセット
  const resetSearch = () => {
    setSearchQuery('');
    setIsSearchActive(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 検索フォーム */}
      <div className="flex justify-center mb-8">
        <form onSubmit={handleSearch} className="w-full max-w-2xl">
          <div className="relative flex items-center">
            <div className="absolute left-3 text-gray-400">
              <FiSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="商品キーワードを入力..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 pl-10 pr-24 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg transition duration-200"
            >
              検索
            </button>
          </div>
        </form>
      </div>

      {/* 検索状態表示 */}
      {isSearchActive && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full">
            <span className="font-medium text-blue-700">
              「{searchQuery}」の検索結果
            </span>
            <button 
              onClick={resetSearch}
              className="ml-2 text-blue-500 hover:text-blue-700"
            >
              <FiX size={18} />
            </button>
          </div>
          <p className="mt-2 text-gray-600">
            {filteredProducts.length}件の商品が見つかりました
          </p>
        </div>
      )}

      {/* 商品グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-square">
                  <Image
                    src={product.image || '/placeholder-product.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h2>
                  <p className="text-gray-600">{product.price.toLocaleString()}円</p>
                  <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition">
                    詳細を見る
                  </button>
                </div>
              </Link>
            </div>
          ))
        ) : isSearchActive ? (
          <div className="col-span-full text-center py-12">
            <div className="bg-red-50 inline-block px-6 py-3 rounded-lg mb-4">
              <p className="text-red-600 font-medium">
                「{searchQuery}」に一致する商品が見つかりませんでした
              </p>
            </div>
            <button 
              onClick={resetSearch}
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition flex items-center mx-auto"
            >
              <FiX className="mr-1" /> 検索をリセット
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
