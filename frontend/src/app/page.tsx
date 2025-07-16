'use client';
import { useState, useEffect, useMemo } from 'react';
import { useMswReady } from '../../hooks/useMswReady';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiX } from 'react-icons/fi';
import Header from '@/components/Header';

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

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return allProducts;
    const query = searchQuery.toLowerCase();
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }, [allProducts, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchActive(true);
    }
  };

  const resetSearch = () => {
    setSearchQuery('');
    setIsSearchActive(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className='bg-[#f7f6f0]'>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12 bg-[#f7f6f0]">
        {/* 検索フォーム */}
        <div className="flex justify-center mb-12">
          <form onSubmit={handleSearch} className="w-full max-w-2xl">
            <div className="relative flex items-center">
              <div className="absolute left-3 text-gray-500">
                <FiSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="商品キーワードを入力..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 pl-10 pr-24 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg transition duration-200 font-['Poppins-Medium']"
              >
                検索
              </button>
            </div>
          </form>
        </div>

        {/* 検索状態表示 */}
        {isSearchActive && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-orange-50 px-4 py-2 rounded-full">
              <span className="font-medium text-orange-700 font-['Poppins-Medium']">
                「{searchQuery}」の検索結果
              </span>
              <button 
                onClick={resetSearch}
                className="ml-2 text-orange-500 hover:text-orange-700"
              >
                <FiX size={18} />
              </button>
            </div>
            <p className="mt-2 text-gray-600 font-['Poppins-Regular']">
              {filteredProducts.length}件の商品が見つかりました
            </p>
          </div>
        )}

        {/* 商品グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
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
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 font-['Poppins-SemiBold']">
                      {product.name}
                    </h2>
                    <p className="text-orange-600 font-['Poppins-Medium']">
                      {product.price.toLocaleString()}円
                    </p>
                    <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition font-['Poppins-Medium']">
                      詳細を見る
                    </button>
                  </div>
                </Link>
              </div>
            ))
          ) : isSearchActive ? (
            <div className="col-span-full text-center py-12">
              <div className="bg-red-50 inline-block px-6 py-3 rounded-lg mb-4">
                <p className="text-red-600 font-medium font-['Poppins-Medium']">
                  「{searchQuery}」に一致する商品が見つかりませんでした
                </p>
              </div>
              <button 
                onClick={resetSearch}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition flex items-center mx-auto font-['Poppins-Medium']"
              >
                <FiX className="mr-1" /> 検索をリセット
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
