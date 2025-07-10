'use client';
import { FiTrash2, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useCartContext } from '@/contexts/CartContext';

export default function CartPage() {
  const { 
    items: cartItems, 
    removeItem, 
    updateQuantity,
    getTotalQuantity,
    getTotalPrice
  } = useCartContext();

  const totalItems = getTotalQuantity();
  const totalPrice = getTotalPrice();

  if (totalItems === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">カートは空です</h1>
        <Link 
          href="/" 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          商品一覧へ
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">ショッピングカート ({totalItems}点)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 商品リスト */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
              <div className="relative w-full sm:w-32 h-32">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-medium text-lg">{item.name}</h2>
                <p className="text-gray-600">{item.price.toLocaleString()}円</p>
                
                <div className="flex items-center mt-4">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="p-1 text-gray-500 disabled:opacity-30"
                  >
                    <FiChevronDown size={18} />
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 text-gray-500"
                  >
                    <FiChevronUp size={18} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="font-medium text-lg">
                  {(item.price * item.quantity).toLocaleString()}円
                </p>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 注文サマリー */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-4">
          <h2 className="text-xl font-bold mb-4">注文概要</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>小計</span>
              <span>{totalPrice.toLocaleString()}円</span>
            </div>
            <div className="flex justify-between">
              <span>配送料</span>
              <span>無料</span>
            </div>
            <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
              <span>合計</span>
              <span>{totalPrice.toLocaleString()}円</span>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition">
            レジに進む
          </button>
        </div>
      </div>
    </div>
  );
}