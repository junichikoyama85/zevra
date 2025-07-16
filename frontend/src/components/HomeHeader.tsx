'use client';
import Link from 'next/link';

export default function HomeHeader() {
  return (
    <header className="fixed top-0 w-full z-999 bg-transparent">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">
        <Link href="/top" className="text-5xl font-extrabold text-black font-['Poppins-Bold'] tracking-tight">
          paca!
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="hover:text-blue-500 transition text-black font-['Poppins-Bold']">
            ABOUT US
          </Link>
          <Link href="/about#news" className="hover:text-blue-500 transition text-black font-['Poppins-Bold'] ">
            NEWS
          </Link>
          <Link href="/about#contact" className="hover:text-blue-500 transition text-black font-['Poppins-Bold'] ">
            CONTACT
          </Link>
          <Link
            href="/"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-200 transition font-['Poppins-Bold'] "
          >
            TRY paca!
          </Link>
        </nav>
      </div>
    </header>
  );
}
