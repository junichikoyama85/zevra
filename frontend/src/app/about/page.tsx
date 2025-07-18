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
            src="/images/about/about_us_top_pc.png"
            alt="About Us"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* コンテンツセクション */}
        <div className="w-[80%] mx-auto px-6 py-30 text-left">
            <p className="font-['Poppins-Medium']" style={{fontSize:'14pt' , color:"#454545"}}>
                (VISION)
            </p>
            <h1 className="font-['Poppins-Bold']" style={{fontSize:'50pt' , color:"#252525"}}>
            Reimagining the world <br />
            <span>— starting in Japan</span>
            </h1>

            <div className="space-y-6 mt-30">
      
            <p className="font-['Poppins-Medium']" style={{fontSize:'14pt' , color:"#454545"}}>
              (ABOUT Zebra)
            </p>
            <div className="space-y-6 mt-15 font-['Poppins-Medium']" style={{fontSize:'18pt' , color:"#252525"}}>
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
              <span  style={{fontSize: "14pt" ,color:"#454545"}}>会社概要</span>
              <h2 className="font-['Poppins-Bold']" style={{fontSize:"45pt" , color: "#252525"}}>COMPANY</h2>
            </div>
            <div className="flex flex-col gap-8 pt-30">
              {/* 各項目に下線と余白を追加 */}
              <div className="flex py-6 border-t border-b border-gray-200">
                <h3 className="w-1/3" style={{fontSize:"16pt" , color:"#454545"}}>会社名</h3>
                <p className="w-2/3" style={{fontSize:"16pt" , color:"#252525"}}>株式会社Zevra / Zevra, Inc.</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200">
                <h3 className="w-1/3" style={{fontSize:"16pt" , color:"#454545"}}>設立</h3>
                <p className="w-2/3" style={{fontSize:"16pt" , color:"#252525"}}>2025年6月10日(第一創業:2023年9月15日)</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200">
                <h3 className="w-1/3" style={{fontSize:"16pt" , color:"#454545"}}>代表者名</h3>
                <p className="w-2/3" style={{fontSize:"16pt" , color:"#252525"}}>大神千朋</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200">
                <h3 className="w-1/3" style={{fontSize:"16pt" , color:"#454545"}}>事業内容</h3>
                <p className="w-2/3" style={{fontSize:"16pt" , color:"#252525"}}>ECモール｢paca!｣の提供</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200">
                <h3 className="w-1/3" style={{fontSize:"16pt" , color:"#454545"}}>認証</h3>
                <p className="w-2/3" style={{fontSize:"16pt" , color:"#252525"}}>通信販売酒類小売業免許</p>
              </div>
              <div className="flex pb-6 border-b border-gray-200"> {/* 最後の項目は下線なし */}
                <h3 className="w-1/3" style={{fontSize:"16pt" , color:"#454545"}}>住所</h3>
                <p className="w-2/3" style={{fontSize:"16pt" , color:"#252525"}}>
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
        <div id="news" style={{ backgroundColor: '#f4f4f4' }}>
            <div className="w-[70%] mx-auto px-6 py-12 rounded-lg">
              <div className="flex flex-col items-center justify-center mb-6">
                <span  style={{fontSize: "14pt" ,color:"#454545"}}>お知らせ</span>
                <h2 className="font-['Poppins-Bold']" style={{fontSize:"45pt" , color: "#252525"}}>NEWS</h2>
              </div>
                
                <div className="flex flex-col  pt-30">
                    {/* お知らせデータを繰り返し表示 */}
                    {newsData.map((news, idx) => (
                        <div
                            key={idx}
                            className="flex items-start md:items-center gap-4 border-b border-gray-200 py-8 transition-colors duration-200 hover:bg-white"
                        >
                            <Link 
                                href={`news/${news.id}`} 
                                className="flex flex-col md:flex-row md:items-center gap-4 w-full group"
                            >
                                {/* 日付: 幅を固定し、中央揃え */}
                                <span 
                                    className="text-sm w-24 md:w-32 text-center md:text-left" 
                                    style={{ color: "#454545", fontSize: "16pt" }}
                                >
                                    {news.date}
                                </span>

                                {/* タイトル: 残りのスペースを占有 */}
                                <span 
                                    className="flex-1 min-w-0 group-hover:underline" 
                                    style={{ fontSize: "16pt", color: "#252525" }}
                                >
                                    {news.title}
                                </span>

                                {/* カテゴリ: 幅を固定 */}
                                <span
                                    className={`flex items-center justify-center text-xm rounded-full text-white shrink-0 mx-20
                                        ${news.category === 'Zevra'
                                            ? 'bg-[#252525]'
                                            : news.category === 'paca!'
                                                ? 'bg-[#e59d00]'
                                                : 'bg-gray-200 text-gray-600'}
                                    `}
                                    style={{ width: '80px', height: '30px', fontSize: "14pt" }}
                                >
                                    {news.category}
                                </span>

                                {/* 矢印アイコン */}
                                {/* 棒線（矢印）の長さを長くしました */}
                                <svg 
                                    width="32" 
                                    height="32" 
                                    viewBox="0 0 36 36" 
                                    fill="none" 
                                    className="shrink-0"
                                >
                                    <path 
                                        d="M8 18h14M18 12l8 6" 
                                        stroke="#252525" 
                                        strokeWidth="2.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        fill="none"
                                    />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                  <button
                    style={{
                      width: '350px',
                      height: '80px',
                      backgroundColor: "#454545",
                    }}
                    className="text-white rounded-lg "
                  >
                    VIEW MORE
                  </button>
                </div>
                
            </div>
        </div>
         

        {/* お知らせセクション */}
        <div className="relative w-full py-25 ">
                <div className="flex flex-col items-center">
                    <p className="font-['poppins-Medium']" style={{color:"#454545" , fontSize:"18pt"}}>Please feel to contact us!</p>
                    <Image src="/images/text_title/tittle_5_X4.png" alt="tittle_4"
                        width={250}
                        height={110}
                        className="mx-auto mb-2"
                        priority/>
                    - - - - - -

                    <div className="flex justify-center mt-15">
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
      </div>
      <HomeFooter />
    </>
  );
}
