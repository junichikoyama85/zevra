'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeHeader() {
  return (
    <header className="fixed top-0 w-full z-999 ">
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
        <nav className="flex items-center gap-6 font-['Poppins-SemiBold']">
          <Link href="/about" className="transition" style={{ color: '#252525', fontSize: '18pt' }}>
            ABOUT US
          </Link>
          <Link href="/about#news" style={{ color: '#252525', fontSize: '18pt' }}>
            NEWS
          </Link>
          <Link href="/about#contact" style={{ color: '#252525', fontSize: '18pt' }}>
            CONTACT
          </Link>
          <Link
            href="/top"
            className="bg-black text-white font-['Poppins-SemiBold'] flex items-center justify-center rounded-full transition"
            style={{ width: '130px', height: '50px',  fontSize: '16pt'  }}
          >
            TRY paca!
          </Link>
        </nav>
      </div>
    </header>
  );
}
