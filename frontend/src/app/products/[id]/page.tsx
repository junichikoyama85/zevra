'use client';
import { use, useEffect, useState } from 'react';
import { FiShoppingCart, FiChevronLeft } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { AddToCartButton } from '@/components/AddToCartButton';
import Header  from '@/components/Header';
import { useCartContext } from '@/contexts/CartContext'

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  code: string; 
  ingredients: string;
  content: string;
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // paramsをアンラップ
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { items } = useCartContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`); // アンラップしたidを使用
        if (!res.ok) throw new Error('商品が見つかりません');
        const data = await res.json();
        console.log(data)
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'エラーが発生しました');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // idを依存配列に

  const inCart = items.some(item => item.id === Number(id));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block">
          {error}
        </div>
        <Link href="/" className="mt-4 inline-block text-blue-500">
          ← 商品一覧に戻る
        </Link>
      </div>
    );
  }

  if (!product) return null;

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
      <Link href="/" className="flex items-center text-blue-500 mb-4">
        <FiChevronLeft className="mr-1" />
        商品一覧に戻る
      </Link>

      {/* 商品詳細表示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 商品画像 */}
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative">
          <Image
            src={`${product.image}`}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* 商品情報 */}
        <div className="space-y-6">
          <div>
            <span className="text-sm text-gray-500">{product.category}</span>
            <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
            <p className="text-2xl font-medium mt-2">{product.price.toLocaleString()}円</p>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold mb-2">商品説明</h2>
            <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
          </div>

          <div className="border-t pt-4">
            {inCart ? (
              <Link 
                href="/cart"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
              >
                <FiShoppingCart />
                カートで確認する
              </Link>
            ) : (
              <AddToCartButton product={{
                id: Number(product.id),
                name: product.name,
                price: product.price,
                image: product.image
              }} />
            )}
          </div>
  
          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold mb-2">詳細情報</h2>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium text-gray-500 w-1/3">商品コード</td>
                  <td className="py-2">P-{product.code}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium text-gray-500">原材料</td>
                  <td className="py-2">{product.ingredients}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium text-gray-500">内容量</td>
                  <td className="py-2">{product.content}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
