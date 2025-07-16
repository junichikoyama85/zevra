'use client'
import Image from 'next/image';
import Link from 'next/link';
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import { useMswReady } from '../../../hooks/useMswReady';
import { useEffect, useState } from 'react';

// 商品データの型（必要に応じて調整）
type News = {
  id: number;
  title: string;
  category: string;
  date: string;
};

export default function AboutPage() {
  const [newsData, setNewsData] = useState<News[]>([]);
  const isMswReady = useMswReady();

  useEffect(() => {
    if (!isMswReady) return
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        setNewsData(data)
      } catch (error) {
        console.error('商品の取得に失敗しました:', error);
      } 
    };
    fetchProducts();
  }, [isMswReady]);

  return (
    <>
      <HomeHeader />
      <div className="min-h-screen bg-white">
        {/* ヒーローセクション */}
        <div className="relative h-[70vh]">
          <Image
            src="/images/img/alesia-kazantceva-VWcPlbHglYc-unsplash.jpg"
            alt="About Us"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* コンテンツセクション */}
        <div className="w-[80%] mx-auto px-6 py-20 text-left">
            <p className="text-sm uppercase tracking-widest text-gray-500">
                (VISION)
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-relaxed font-['Poppins-Bold']">
            Reimagining the world <br />
            <span>— starting in Japan</span>
            </h1>

            <div className="space-y-6 mt-30">
            <p className="text-sm uppercase tracking-widest text-gray-500">
                (ABOUT Zebra)
            </p>

            <div className="space-y-6 mt-15">
                <p className="text-gray-700 leading-relaxed">
                Born from the fusion of Zeal—passion, commitment, and conviction—and Era—a new age,<br />
                Zevra represents those who dare to forge the future through unshakable determination.
                </p>
                <p className="text-gray-700 leading-relaxed">
                The sound of &quot;Zebra&quot; echoes within it—a symbol of freedom, independence, and bold exploration.<br />
                Each zebra bears a unique pattern—no two alike—a quiet testament to the power of authenticity and individuality.
                </p>
                <p className="text-gray-700 leading-relaxed">
                From the spirit of &quot;zebra companies&quot; that pursue both social impact and business growth,<br />
                to the fearless adventurer who strides into the unknown,<br />
                Zevra carries within it the will to defy convention and move the world.
                </p>
                <p className="text-gray-700 leading-relaxed">
                Carry your zeal and conviction. Create a stir in the world.<br />
                Don’t blend in—draw your own pattern.<br />
                The future belongs to those bold enough to shape it.
                </p>
            </div>
            </div>
        </div>

         {/* 会社情報セクション */}
        <div id="company" className='p-15' style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
          <div className="w-[60%] mx-auto px-6 py-12 rounded-lg">
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="text-base text-gray-600 mb-1">会社概要</span>
              <h2 className="text-5xl font-bold text-gray-800 font-['Poppins-Bold']">COMPANY</h2>
            </div>
            <div className="flex flex-col gap-8 pt-30">
              {/* 各項目に下線と余白を追加 */}
              <div className="flex py-6 border-t border-b border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-700 w-1/3">会社名</h3>
                <p className="text-gray-600 w-2/3">株式会社Zevra / Zevra, Inc.</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-700 w-1/3">設立</h3>
                <p className="text-gray-600 w-2/3">2025年6月10日(第一創業:2023年9月15日)</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-700 w-1/3">代表者名</h3>
                <p className="text-gray-600 w-2/3">大神千朋</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-700 w-1/3">事業内容</h3>
                <p className="text-gray-600 w-2/3">ECモール｢paca!｣の提供</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-700 w-1/3">認証</h3>
                <p className="text-gray-600 w-2/3">通信販売酒類小売業免許</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200"> {/* 最後の項目は下線なし */}
                <h3 className="text-lg font-semibold mb-2 text-gray-700 w-1/3">住所</h3>
                <p className="text-gray-600 w-2/3">
                    東京オフィス:〒101-0024 東京都千代田区神田和泉町1番地6-16<br />
                    神戸オフィス:〒657-0836 兵庫県神戸市灘区城内2-5-20
                </p>
              </div>
              {/* <div className="pt-6"> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.0271466517939!2d139.77616472841902!3d35.69894539827921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea8a2c0f93f%3A0xd04af8b18609f1c8!2z44CSMTAxLTAwMjQg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw5ZKM5rOJ55S677yR4oiS77yW4oiS77yR77yWIOODpOODnuODiOODk-ODqw!5e0!3m2!1sja!2sjp!4v1752632283835!5m2!1sja!2sjp"
                    width="auto"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                     className="pt-15"
                    referrerPolicy="no-referrer-when-downgrade"
                />
              {/* </div> */}

            </div>
          </div>
        </div>
        

        {/* お知らせセクション */}
        <div id="news" style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
            <div className="w-[60%] mx-auto px-6 py-12 rounded-lg">
                <div className="flex flex-col items-center justify-center mb-6">
                    <span className="text-base text-gray-600 mb-1">お知らせ</span>
                    <h2 className="text-5xl font-bold text-gray-800 font-['Poppins-Bold']">NEWS</h2>
                </div>
                
                <div className="flex flex-col  pt-30">
                    {/* お知らせデータを繰り返し表示 */}
                    {newsData.map((news, idx) => (
                        <div
                            key={idx}
                            className="flex  items-start md:items-center gap-2 border-b border-gray-200 py-8 transition-colors duration-200 hover:bg-white"
                        >
                            <Link href={`news/${news.id}`} className="flex flex-col md:flex-row md:items-center gap-2 w-full group">
                                <span className="text-sm text-gray-500 w-24">{news.date}</span>
                                <span className="w-48 flex-1 text-gray-800 font-medium group-hover:underline break-words ">{news.title}</span>
                                <span
                                    className={`px-6 py-3 mx-15 text-xm rounded-full text-white
                                        ${news.category === 'Zevra'
                                            ? 'bg-black'
                                            : news.category === 'paca!'
                                                ? 'bg-orange-400'
                                                : 'bg-gray-200 text-gray-600'}
                                    `}
                                >
                                    {news.category}
                                </span>
                                <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
                                    <path d="M10 14h6M14 10l4 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                  <button
                    style={{backgroundColor: 'rgb(61, 61, 61)' }}
                    className="px-20 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    VIEW MORE
                  </button>
                </div>
            </div>
        </div>
         

        {/* お知らせセクション */}
        <div id="contact" className="w-[80%] mx-auto px-6 py-40">
            {/* タイトルエリア */}
            <div className="flex flex-col items-center mb-10">
            <p className="text-base tracking-widest text-gray-500 mb-2">Please feel free to contact us!</p>
            <Image src="/images/text_title/tittle_1.png" alt="title_1"
                width={320}
                height={110}
                className="mx-auto mb-2"
                priority/>
            - - - - - -
            </div>

            <div className="flex justify-center">
              <Link href="/contact">
                <Image
                  src="/images/button/contact.png"
                  alt="contact_btn"
                  width={640}
                  height={50}
                  className="mx-auto mb-2 rounded-md shadow cursor-pointer"
                  priority
                />
              </Link>
            </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}
