'use client';
import Link from 'next/link';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';

export default function Header() {
  const { totalItems } = useCart(); // 自動的にcartItemsの変更を監視

  return (
    <header className="border-b sticky top-0 bg-white z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          ECサイト
        </Link>
        <nav className="flex gap-4">
          <Link href="/" className="hover:text-blue-500">
            商品一覧
          </Link>
          <Link href="/cart" className="relative hover:text-blue-500">
            <FiShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/login" className="hover:text-blue-500">
            <FiUser size={20} />
          </Link>
        </nav>
      </div>
    </header>
  );
} 