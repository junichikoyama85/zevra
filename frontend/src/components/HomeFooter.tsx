'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeFooter() {
    return (
        <footer className="relative w-full min-h-screen bg-[#f7f6f0]">
            {/* 背景画像 */}
            <div className="absolute inset-0">
                <Image src="/images/footer/footer_back.png" alt="footer background" fill className="object-cover" priority/>
            </div>

            {/* コンテンツコンテナ */}
            <div className="absolute z-10 w-full h-full flex flex-col md:flex-row">
                {/* 左半分 (ブランド情報) */}
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-center text-center md:text-left">
                    <div className="max-w-md">
                        <div className="relative w-[25rem] h-[15rem] flex items-center justify-center">
                            <Image src="/images/text_title/tittle_paca_mv_X2.png" alt="paca! メインタイトル" fill className="object-contain" priority/>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-6 mt-30">
                            <a href="#" className="text-2xl text-black hover:text-yellow-500 transition">
                                <Image src="/images/logo/Instagram_Glyph_Black.png" alt="Instagramロゴ"
                                    width={32}
                                    height={32}
                                    className="inline-block"/>
                            </a>
                            <a href="#" className="text-2xl text-black hover:text-yellow-500 transition">
                                <Image src="/images/logo/x_logo-black.png" alt="Xロゴ"
                                    width={32}
                                    height={32}
                                    className="inline-block"/>
                            </a>
                        </div>

                        <div className="mt-8">
                            <p className="text-2xl font-['Poppins-Bold']"
                                style={
                                    {
                                        color: '#252525',
                                        fontSize: "20pt"
                                    }
                            }>
                                Zevra, Inc.
                            </p>

                            <p className="font-['Poppins-Light'] mt-2"
                                style={
                                    {
                                        color: "#454545",
                                        fontSize: "14pt"
                                    }
                            }>
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
                            <ul className="space-y-4 mr-12 font-['poppins-SemiBold']"
                                style={
                                    {
                                        fontSize: "20pt",
                                        color: "#252525"
                                    }
                            }>
                                <li>
                                    <Link href="/">
                                        TOP
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        ABOUT US
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about#news">
                                        NEWS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about#contact">
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* ポリシー */}
                        <div>
                            <ul className="space-y-4 font-['poppins-Medium']"
                                style={
                                    {
                                        fontSize: "14pt",
                                        color: "#454545"
                                    }
                            }>
                                {
                                [
                                    'FAQ',
                                    'Terms of Use',
                                    'Commercial Law',
                                    'Privacy Policy',
                                    'Cancellation'
                                ].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-lg text-black hover:text-yellow-500 transition flex items-center">
                                            {item} </Link>
                                    </li>
                                ))
                            } </ul>
                        </div>
                    </div>

                    {/* ボタン (右側下部) */}
                    <div className="mt-12 text-center w-full">
                        <Link href="/">
                            <button className="relative w-[400px] h-[80px] text-white font-['Poppins-SemiBold']"
                                style={
                                    {
                                        backgroundColor: '#e59d00',
                                        fontSize: '22pt',
                                        borderRadius: '10px' // さらに角を強調
                                    }
                            }>
                                Try paca!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
