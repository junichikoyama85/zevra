'use client';
import Link from 'next/link';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCartContext } from '@/contexts/CartContext';

export default function Header() {
  const { getTotalQuantity } = useCartContext();
  const totalItems = getTotalQuantity();

  return (
    <header className="fixed top-0 w-full z-999 bg-transparent">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">
        <Link href="/top" className="text-5xl font-extrabold text-black font-['Poppins-Bold'] tracking-tight">
          paca!
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="hover:text-orange-500 transition text-black text-2xl font-['Poppins-Bold']">
            Products
          </Link>
          <Link href="/cart" className="relative hover:text-orange-500 transition text-black text-2xl font-['Poppins-Bold']">
            <FiShoppingCart size={28} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/login" className="hover:text-orange-500 transition text-black text-2xl font-['Poppins-Bold']">
            <FiUser size={28} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
