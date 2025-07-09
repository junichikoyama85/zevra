import Link from 'next/link';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ECサイト
        </Link>

        {/* ナビゲーション */}
        {/* <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-500 transition">
            商品一覧
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition">
            会社概要
          </Link>
        </nav> */}

        {/* アイコン群 */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiSearch className="text-gray-600" />
          </button>
          <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
            <FiShoppingCart className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </Link>
          <Link href="/login" className="p-2 hover:bg-gray-100 rounded-full">
            <FiUser className="text-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  );
} 