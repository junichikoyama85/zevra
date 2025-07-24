'use client';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import PacaButton from './PacaButton';

export default function HomeHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-100">
            <div className="w-[90%] mx-auto flex justify-between items-center py-4">
                {/* ロゴ */}
                <Link href="/" className="relative w-28 h-14 sm:w-40 sm:h-20 flex items-center justify-center">
                    <Image src="/images/text_title/tittle_paca_mv_X2.png" alt="paca! メインタイトル" fill className="object-contain" priority/>
                </Link>

                {/* ハンバーガーメニューボタン (モバイル用) */}
                <div className="flex items-center gap-4 md:hidden">
                    <Link href="/top" className="bg-black text-white font-['Poppins-SemiBold'] flex items-center justify-center rounded-full hover:bg-opacity-90 transition"
                        style={
                            {
                                width: '120px',
                                height: '50px',
                                fontSize: '15pt'
                            }
                    }>
                        TRY paca!
                    </Link>
                    <button className="p-1.5 focus:outline-none rounded-full relative z-100"
                        onClick={
                            () => setIsMenuOpen(!isMenuOpen)
                        }
                        aria-label="メニューを開く"
                        style={
                            {
                                width: '44px',
                                height: '44px',
                                backgroundColor: '#e59d00',
                                borderRadius: '50%'
                            }
                    }>
                        {/* ハンバーガーアイコン */}
                        <div className="w-7 h-7 flex flex-col justify-center gap-1.5 mx-auto">
                            <span className={
                                `h-0.5 w-full bg-white transition-all ${
                                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`
                            }></span>
                            <span className={
                                `h-0.5 w-full bg-white transition-all ${
                                    isMenuOpen ? 'opacity-0' : ''
                                }`
                            }></span>
                            <span className={
                                `h-0.5 w-full bg-white transition-all ${
                                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`
                            }></span>
                        </div>
                    </button>
                </div>

                {/* デスクトップ用ナビゲーション */}
                <nav className="hidden md:flex items-center gap-6 font-['Poppins-SemiBold']">
                    <Link href="/about" className="hover:underline"
                        style={
                            {
                                color: '#252525',
                                fontSize: '18pt'
                            }
                    }>
                        ABOUT US
                    </Link>
                    <Link href="/about#news" className="hover:underline"
                        style={
                            {
                                color: '#252525',
                                fontSize: '18pt'
                            }
                    }>
                        NEWS
                    </Link>
                    <Link href="/about#contact" className="hover:underline"
                        style={
                            {
                                color: '#252525',
                                fontSize: '18pt'
                            }
                    }>
                        CONTACT
                    </Link>
                    <Link href="/top" className="bg-black text-white font-['Poppins-SemiBold'] flex items-center justify-center rounded-full hover:bg-opacity-90 transition"
                        style={
                            {
                                width: '130px',
                                height: '50px',
                                fontSize: '16pt'
                            }
                    }>
                        TRY paca!
                    </Link>
                </nav>

                {/* モバイル用メニュー (折りたたみ) */}
                {
                isMenuOpen && (
                    <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg flex flex-col items-start justify-start animate-fadeIn overflow-y-auto"
                        style={
                            {
                                backgroundColor: "#f8f7f1",
                                zIndex: 10
                            }
                    }>
                        {/* ロゴ */}
                        <div className="w-full flex justify-start mt-4 mb-2 px-4">
                            <Link href="/" className="relative w-36 h-16 flex items-center"
                                onClick={
                                    () => setIsMenuOpen(false)
                            }>
                                <Image src="/images/text_title/tittle_paca_mv_X2.png" alt="paca! メインタイトル" fill className="object-contain" priority/>
                            </Link>
                        </div>

                        {/* メインナビゲーション */}
                        <nav className="w-full flex flex-col items-start  px-4">
                            <Link href="/top" className="block py-2 w-full text-left hover:underline"
                                style={
                                    {
                                        color: '#252525',
                                        fontSize: '16pt'
                                    }
                                }
                                onClick={
                                    () => setIsMenuOpen(false)
                            }>
                                TOP
                            </Link>
                            <Link href="/about" className="block py-2 w-full text-left hover:underline"
                                style={
                                    {
                                        color: '#252525',
                                        fontSize: '16pt'
                                    }
                                }
                                onClick={
                                    () => setIsMenuOpen(false)
                            }>
                                ABOUT US
                            </Link>
                            <Link href="/about#news" className="block py-2 w-full text-left hover:underline"
                                style={
                                    {
                                        color: '#252525',
                                        fontSize: '16pt'
                                    }
                                }
                                onClick={
                                    () => setIsMenuOpen(false)
                            }>
                                NEWS
                            </Link>
                            <Link href="/about#contact" className="block py-2 w-full text-left hover:underline"
                                style={
                                    {
                                        color: '#252525',
                                        fontSize: '16pt'
                                    }
                                }
                                onClick={
                                    () => setIsMenuOpen(false)
                            }>
                                CONTACT
                            </Link>
                        </nav>

                        {/* CTAボタン */}
                        <div className="w-full">
                            <PacaButton label="Try Using paca!" href="/top" backgroundColor="#e59d00" className=""/>
                        </div>

                        {/* 白い棒線 */}
                        <div className="my-4"
                            style={
                                {
                                    width: "90%",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    borderTop: "1.5px solid #fff",
                                    opacity: 0.7
                                }
                        }></div>

                        {/* サブメニュー（FAQ等） */}
                        <div className="w-full flex flex-col items-start mt-2 px-4">
                            <ul className="space-y-2 font-['poppins-Medium'] w-full"
                                style={
                                    {
                                        fontSize: "13pt",
                                        color: "#454545"
                                    }
                            }>
                                {
                                [
                                    'FAQ',
                                    'Terms of Use',
                                    'Specified Commercial Tramsaction Act',
                                    'Privacy Policy',
                                    'Cancellation Policy',
                                ].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-base text-black hover:text-yellow-500 transition flex items-center">
                                            {item} </Link>
                                    </li>
                                ))
                            } </ul>
                        </div>

                        {/* 白い棒線 */}
                        <div className="my-4"
                            style={
                                {
                                    width: "90%",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    borderTop: "1.5px solid #fff",
                                    opacity: 0.7
                                }
                        }></div>


                        {/* SNSアイコン */}
                        <div className="flex justify-start space-x-6 mt-4 mb-2 px-4">
                            <a href="#" className="text-2xl text-black hover:text-yellow-500 transition">
                                <Image src="/images/logo/Instagram_Glyph_Black.png" alt="Instagramロゴ"
                                    width={28}
                                    height={28}
                                    className="inline-block"/>
                            </a>
                            <a href="#" className="text-2xl text-black hover:text-yellow-500 transition">
                                <Image src="/images/logo/x_logo-black.png" alt="Xロゴ"
                                    width={28}
                                    height={28}
                                    className="inline-block"/>
                            </a>
                        </div>
                        <p className="font-['Poppins-Regular'] px-4 mb-15"
                            style={
                                {
                                    color: '#252525',
                                    fontSize: "12pt"
                                }
                        }>
                            Zevra, Inc.
                        </p>

                    </div>
                )
            } </div>
        </header>
    );
}
