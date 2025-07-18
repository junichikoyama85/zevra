'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">
        {/* ロゴ */}
        <Link href="/" className="relative w-40 h-20 flex items-center justify-center">
          <Image
            src="/images/text_title/tittle_paca_mv_X2.png"
            alt="paca! メインタイトル"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* ハンバーガーメニューボタン (モバイル用) */}
        <div className='md:hidden md:flex '>
          <Link
              href="/top"
              className="bg-black text-white font-['Poppins-SemiBold'] flex items-center justify-center rounded-full hover:bg-opacity-90 transition"
              style={{ width: '130px', height: '50px', fontSize: '16pt' }}
            >
              TRY paca!
            </Link>
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {/* ハンバーガーアイコン */}
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
  
        {/* デスクトップ用ナビゲーション */}
        <nav className="hidden md:flex items-center gap-6 font-['Poppins-SemiBold']">
          <Link href="/about" className="hover:underline" style={{ color: '#252525', fontSize: '18pt' }}>
            ABOUT US
          </Link>
          <Link href="/about#news" className="hover:underline" style={{ color: '#252525', fontSize: '18pt' }}>
            NEWS
          </Link>
          <Link href="/about#contact" className="hover:underline" style={{ color: '#252525', fontSize: '18pt' }}>
            CONTACT
          </Link>
          <Link
            href="/top"
            className="bg-black text-white font-['Poppins-SemiBold'] flex items-center justify-center rounded-full hover:bg-opacity-90 transition"
            style={{ width: '130px', height: '50px', fontSize: '16pt' }}
          >
            TRY paca!
          </Link>
        </nav>

        {/* モバイル用メニュー (折りたたみ) */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-24 left-0 w-full bg-white shadow-lg py-4 px-6 animate-fadeIn">
            <Link 
              href="/about" 
              className="block py-3 hover:underline" 
              style={{ color: '#252525', fontSize: '18pt' }}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link 
              href="/about#news" 
              className="block py-3 hover:underline" 
              style={{ color: '#252525', fontSize: '18pt' }}
              onClick={() => setIsMenuOpen(false)}
            >
              NEWS
            </Link>
            <Link 
              href="/about#contact" 
              className="block py-3 hover:underline" 
              style={{ color: '#252525', fontSize: '18pt' }}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/top"
              className="block mt-4 bg-black text-white font-['Poppins-SemiBold'] text-center rounded-full py-3 hover:bg-opacity-90 transition"
              style={{ fontSize: '16pt' }}
              onClick={() => setIsMenuOpen(false)}
            >
              TRY paca!
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
