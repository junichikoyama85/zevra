'use client';
import { useState, useEffect } from 'react';
import { useMswReady } from '../../hooks/useMswReady';
import Link from 'next/link';
import Image from 'next/image';

// 商品の型定義
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMswReady = useMswReady();

  useEffect(() => {
    if (!isMswReady) return;

    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('商品の取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [isMswReady]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">商品一覧</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
        ))}
      </div>
    </div>
  );
}
