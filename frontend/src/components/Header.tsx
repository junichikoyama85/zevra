'use client';
import Link from 'next/link';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCartContext } from '@/contexts/CartContext';
import Image from 'next/image';

export default function Header() {
  const { getTotalQuantity } = useCartContext();
  const totalItems = getTotalQuantity();

  return (
    <header className="fixed top-0 w-full z-999 bg-transparent">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">
      <Link href="/" className="relative w-40 h-20 flex items-center justify-center">
          <Image
            src="/images/text_title/tittle_paca_mv_X2.png"
            alt="paca! メインタイトル"
            fill
            className="object-contain"
            priority
          />
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
