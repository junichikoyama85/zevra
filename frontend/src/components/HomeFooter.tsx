'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeFooter() {
  return (
    <footer className="relative w-full min-h-screen bg-[#f7f6f0]">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image 
          src="/images/footer/footer_back.png" 
          alt="footer background" 
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* コンテンツコンテナ */}
      <div className="absolute z-10 w-full h-full flex flex-col md:flex-row">
        {/* 左半分 (ブランド情報) */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-center text-center md:text-left">
          <div className="max-w-md">
            <h2 className="text-9xl font-bold mb-8 text-black  font-['Poppins-Bold']">paca!</h2>
            
            <div className="flex justify-center md:justify-start space-x-6 mt-30">
              <a href="#" className="text-2xl text-black hover:text-yellow-500 transition">
                <Image 
                  src="/images/logo/Instagram_Glyph_Black.png" 
                  alt="Instagramロゴ" 
                  width={32} 
                  height={32} 
                  className="inline-block"
                />
              </a>
              <a href="#" className="text-2xl text-black hover:text-yellow-500 transition">
              <Image 
                  src="/images/logo/x_logo-black.png" 
                  alt="Xロゴ" 
                  width={32} 
                  height={32} 
                  className="inline-block"
                />
              </a>
            </div>

            <div className="mt-8">
                <p className="text-2xl font-['Poppins-Bold']" style={{ color: 'rgb(70,69,66)' }}>
                  Zevra, Inc.
                </p>

                <p className="text-lg text-black/80 mt-2">
                 © 2025 Zevra All Rights Reserved.
                </p>
            </div>
         
          </div>
        </div>

        {/* 右半分 (ナビゲーション) */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* メニュー */}
            <div>
              <ul className="space-y-4" >
                {/* {['TOP', 'ABOUT US', 'NEWS', 'CONTACT'].map((item) => ( */}
                  <li  style={{ color: 'rgb(70,69,66)' }}>
                    <Link href="/top" className="text-2xl  hover:text-yellow-500 transition flex items-center font-['Poppins-Bold']">
                        TOP
                    </Link>
                  </li>
                  <li  style={{ color: 'rgb(70,69,66)' }}>
                    <Link href="/about" className="text-2xl  hover:text-yellow-500 transition flex items-center font-['Poppins-Bold']">
                        ABOUT US
                    </Link>
                  </li>
                  <li  style={{ color: 'rgb(70,69,66)' }}>
                    <Link href="/about#news" className="text-2xl  hover:text-yellow-500 transition flex items-center font-['Poppins-Bold']">
                        NEWS
                    </Link>
                  </li>
                  <li  style={{ color: 'rgb(70,69,66)' }}>
                    <Link href="/about#contact" className="text-2xl  hover:text-yellow-500 transition flex items-center font-['Poppins-Bold']">
                        CONTACT
                    </Link>
                  </li>
                {/* ))} */}
              </ul>
            </div>

            {/* ポリシー */}
            <div>
              <ul className="space-y-4">
                {[
                  'FAQ',
                  'Terms of Use',
                  'Commercial Law',
                  'Privacy Policy',
                  'Cancellation'
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-lg text-black hover:text-yellow-500 transition flex items-center">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ボタン (右側下部) */}
          <div className="mt-12 text-center w-full">
              <Link href="/contact">
                <Image
                  src="/images/button/try_paca.jpg"
                  alt="trypaca_btn"
                  width={ 350}
                  height={100}
                  className="mx-auto mb-2 rounded-md shadow cursor-pointer"
                  priority
                />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
