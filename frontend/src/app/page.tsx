"use client"
import Link from 'next/link';
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import Image from 'next/image';
import { useState } from 'react';

const solutions = [
    {
      image: "/images/solution/6FB3A88B-6860-4C6C-AB15-F9377F3D2457.JPG",
      alt: "全国各地の特産品",
      title: "Simple, effortless, and stress-free",
      description:[ "Planning a trip takes time—flights, hotels, itineraries... It can be overwhelming." ,"With paca!, there’s no hassle. Our smart ordering system and AI concierge make the experience smooth and easy—just relax and enjoy."]
    },
    {
      image: "/images/solution/21F3260B-5B2B-46AF-B6F7-784B173B8D4D.JPG",
      alt: "地域限定の逸品",
      title: "Experience regional specialties from all over Japan, delivered to your door",
      description: ["We bring you local products that are usually only available in specific regions.","Stay comfortably at your accommodation while discovering the flavors of Japan—no need to travel far and wide."]
    },
    {
      image: "/images/solution/32440932_s.jpg",
      alt: "新しい発見",
      title: "Discover Japanese products that truly match your taste",
      description: ["Japan’s food and drink culture is rich and unique—but trying everything to find your favorites? That’s nearly impossible.","Our AI agent learns your preferences and helps you discover local specialties tailored to your taste."]
    }
  ];

  const how_to = [
    "Enter your accommodation address or reservation URL, and choose your preferred delivery date (specific day or your full stay period)." , "Browse and select the products you want.","Complete your purchase and receive a confirmation email." , "Follow the instructions in the email and pick up your package at your preferred time."
  ];


export default function TopPage() {
    const [selectedIdx, setSelectedIdx] = useState(0); // 初期値を0に設定

    return (
        <>
            <HomeHeader/>
            {/* =============================================
            main
            ============================================= */}
            <div className="relative w-full h-screen">
                <Image src="/images/main_visual/back_mv.png" alt="back_mv" fill className="object-cover" priority/>
                <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 translate-x-[220px] z-10 w-[18%] h-1/3 flex items-center justify-start pointer-events-none">
                    <Image src="/images/main_visual/_paca_mv_1.png" alt="_paca_mv_1" fill className="object-contain" priority/>
                </div>
                <div className="absolute left-1/2 z-10 w-[18%] h-1/3 flex items-start justify-center pointer-events-none"
                    style={{
                        top: '60%',
                        left: '40%',
                        transform: 'rotate(-20deg)'
                    }}>
                    <Image src="/images/main_visual/_paca_mv_2.png" alt="_paca_mv_2" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-10 w-[18%] h-1/3 flex items-start justify-end pointer-events-none"
                    style={{
                        top: '28%',
                        left: '20%'
                    }}>
                    <Image src="/images/main_visual/_paca_mv_3.png" alt="_paca_mv_3" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-10 w-[18%] h-1/3 flex items-start justify-end pointer-events-none"
                    style={{
                        top: '20%',
                        left: '10%',
                        transform: 'rotate(-10deg)'
                    }}>
                    <Image src="/images/main_visual/sousyoku_3.png" alt="sousyoku_3.png" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-10 w-[9%] h-[12%] flex items-start justify-end pointer-events-none"
                    style={{
                        top: '66%',
                        left: '33%',
                        transform: 'rotate(-10deg)'
                    }}>
                    <Image src="/images/main_visual/dango.png" alt="団子" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-10 w-[9%] h-[12%] flex items-start justify-end pointer-events-none"
                    style={{
                        top: '75%',
                        left: '28%',
                        transform: 'rotate(-20deg)'
                    }}>
                    <Image src="/images/main_visual/kyusu.png" alt="急須" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-20 w-[10%] h-[13%] flex items-center justify-center pointer-events-none"
                    style={{
                        top: '18%',
                        left: '35%'
                    }}>
                    <Image src="/images/main_visual/sennsu.png" alt="扇子" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-20 w-[10%] h-[13%] flex items-center justify-center pointer-events-none"
                    style={{
                        top: '25%',
                        left: '43%',
                        transform: 'rotate(20deg)'
                    }}>
                    <Image src="/images/main_visual/daruma.png" alt="達磨" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-20 w-[18%] h-[20%] flex items-center justify-center pointer-events-none"
                    style={{
                        top: '20%',
                        left: '52%',
                        transform: 'rotate(0deg)'
                    }}>
                    <Image src="/images/main_visual/sousyoku_2.png" alt="sousyoku_2" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-20 w-[24%] h-[33%] flex items-start justify-end pointer-events-none font-['Poppins-Bold']"
                    style={{
                        top: '62%',
                        left: '8%',
                        transform: 'rotate(200deg)'
                    }}>
                    <Image src="/images/main_visual/sousyoku_4.png" alt="sousyoku_4" fill className="object-contain" priority/>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <p className="text-lg text-black bg-opacity-70 px-4">
                        The whole &quot;Made in JAPAN&quot; at your fingertips
                    </p>
                    <div className="relative w-[32rem] h-[10rem] flex items-center justify-center bg-white bg-opacity-80 font-['Poppins-Bold']">
                        <Image
                            src="/images/text_title/tittle_paca_mv_X2.png"
                            alt="paca! メインタイトル"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                <div className="absolute z-20 w-[9%] h-[12%] flex items-end justify-start pointer-events-none"
                    style={{
                        top: '65%',
                        left: '53%',
                    }}>
                    <Image src="/images/main_visual/tokkuri.png" alt="徳利" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-20 w-[9%] h-[12%] flex items-end justify-start pointer-events-none"
                    style={{
                        top: '75%',
                        left: '63%',
                        transform: 'rotate(-30deg)'
                    }}>
                    <Image src="/images/main_visual/kani.png" alt="蟹" fill className="object-contain" priority/>
                </div>
                <div className="absolute z-20 w-[25%] h-[33%] flex items-end justify-start pointer-events-none"
                    style={{
                        top: '40%',
                        left: '70%',
                        transform: 'rotate(0deg)'
                    }}>
                    <Image src="/images/main_visual/sousyoku_1.png" alt="装飾1" fill className="object-contain" priority/>
                </div>
            </div>

            {/* =============================================
            service
            ============================================= */}
            <div className="py-24 bg-[#f7f6f0] relative z-10">
                <div className="container mx-auto flex flex-col items-center">
                    {/* タイトルエリア */}
                    <div className="flex flex-col items-center mb-10">
                        <p className="text-base tracking-widest text-gray-500 mb-2">OUR SERVICES</p>
                        <Image src="/images/text_title/tittle_1_X4.png" alt="tittle_1_X4"
                            width={320}
                            height={110}
                            className="mx-auto mb-2"
                            priority/>
                        - - - - - -
                    </div>

                    {/* サービス説明エリア */}
                    <div className="max-w-2xl text-center mx-auto">
                        <h2 className="text-1xl md:text-3xl font-bold mb-6 text-gray-800 leading-relaxed">
                            A More Meaningful Way to Experience Japan
                        </h2>
                        <div className="text-left">
                            <div className="space-y-8 my-10">
                                <p className="text-base md:text-lg text-gray-700 leading-loose whitespace-pre-line">
                                    paca! is a service designed to make your stay in Japan even more special.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-loose whitespace-pre-line">
                                    We deliver handpicked local specialties—full of character and charm that are usually only available in specific regions of the country.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-loose whitespace-pre-line">
                                    You simply pick up your box at your convenience, and enjoy it in the comfort of your room.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-loose whitespace-pre-line">
                                    Together, let’s explore the hidden gems of Japan—regional treasures that even many locals have yet to discover.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-loose whitespace-pre-line">
                                    paca! offers you a deeper connection to Japanese culture, filled with the spirit of omotenashi—Japan’s unique sense of heartfelt hospitality.
                                </p>
                            </div>
                        </div>
                        <div className="absolute z-20 w-[25%] h-[33%] flex items-end justify-start pointer-events-none"
                            style={{
                                top: '7%',
                                right: '0%',
                                transform: 'translate(-50%, -50%)'
                            }}>
                            <Image src="/images/about/sousyoku_5.png" alt="装飾5"
                                width={180}
                                height={60}
                                priority/>
                        </div>
                        <div className="absolute z-20 w-[35%] h-[45%] flex items-end justify-start pointer-events-none"
                            style={{
                                top: '10%',
                                left: '0%'
                            }}>
                            <Image src="/images/about/sousyoku_7.png" alt="装飾5"
                                width={200}
                                height={100}
                                className="mx-auto mb-2"
                                priority/>
                        </div>
                        <div className="absolute z-20 w-[25%] h-[30%] flex items-end justify-start pointer-events-none"
                            style={{
                                bottom: '5%',
                                right: '3%',
                                transform: 'rotate(200deg)'
                            }}>
                            <Image src="/images/about/sousyoku_6.png" alt="装飾6"
                                width={140}
                                height={70}
                                className="mx-auto mb-2"
                                priority/>
                        </div>
                        <div className="absolute z-20 w-[25%] h-[30%] flex items-end justify-start pointer-events-none"
                            style={{
                                bottom: '-20%',
                                right: '0',
                                transform: 'rotate(200deg)'
                            }}>
                            <Image src="/images/about/sousyoku_8.png" alt="装飾8"
                                width={140}
                                height={70}
                                className="mx-auto mb-2"
                                priority/>
                        </div>

                        {/* 「詳しく見る」ボタン */}
                        <div className="mt-30 text-center w-full">
                            <Link href="/">
                                <Image
                                    src="/images/button/try_usingpaca.jpg"
                                    alt="trypaca_btn"
                                    width={1920}
                                    height={100}
                                    className="w-full h-auto mb-2 rounded-md shadow cursor-pointer"
                                    priority
                                />
                            </Link>
                        </div>
                       
                    </div>
                </div>
            </div>

            {/* =============================================
            problem
            ============================================= */}
            <div className="relative w-full min-h-[400px] bg-[#f7f6f0] bg-cover bg-top bg-no-repeat pb-30"
                style={{
                    backgroundImage: "url('/images/background/background_2.png')"
                }}>
                <div className="container mx-auto pt-80 px-4">
                    {/* タイトルエリア */}
                    <div className="text-center mb-16">
                        <p className="text-base tracking-widest text-gray-500 mb-2">
                            Do you have any of the following problems?
                        </p>
                        <Image 
                            src="/images/text_title/tittle_2_X4.png" 
                            alt="tittle_2_X4"
                            width={320}
                            height={110}
                            className="mx-auto mb-4"
                            priority
                        />
                        - - - - - -
                    </div>

                    {/* ケーススタディ */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "CASE - 01",
                                text: `"Third time in Japan. Sushi? Check. Kimono? Done. Now I wanna see the real Japan—like the kind only locals know."`,
                                image: "/images/problem/nayami_01.png"
                            },
                            {
                                title: "CASE - 02",
                                text: `"Was dying to do a sake/shochu/whisky tasting in Japan... Didn't know they're made in totally different regions!"`,
                                image: "/images/problem/nayami_02.png",
                                bubbleType: Math.floor(Math.random() * 4)
                            },
                            {
                                title: "CASE - 03",
                                text: `"Every time I see the Ramen store there's a huge line... But wait—Hotel + the Ramen at my time, no line, no problem!?"`,
                                image: "/images/problem/nayami_03.png",
                                bubbleType: Math.floor(Math.random() * 4)
                            }
                        ].map((caseItem, index) => {
                            // 不規則な形状パターンを手動定義（インデックスごとに異なる形状）
                            const bubbleShapes = [
                                { // タイプ1: すべての角を大きく丸く
                                    borderTopLeftRadius: "120px",
                                    borderTopRightRadius: "80px",
                                    borderBottomRightRadius: "100px",
                                    borderBottomLeftRadius: "80px",
                                    border: "1px solid #f0f0f0"
                                },
                                { // タイプ2: 右側と左側の角を大きく丸く
                                    borderTopLeftRadius: "80px",
                                    borderTopRightRadius: "100px",
                                    borderBottomRightRadius: "100px",
                                    borderBottomLeftRadius: "90px",
                                    border: "none"
                                },
                                { // タイプ3: 不規則な波型を維持しつつ、角を大きく丸く
                                    borderTopLeftRadius: "80px",
                                    borderTopRightRadius: "100px",
                                    borderBottomRightRadius: "60px",
                                    borderBottomLeftRadius: "120px",
                                    border: "1px solid #f0f0f0"
                                }
                            ];

                            // ケース番号に応じて形状を選択（3パターン循環）
                            const bubbleStyle = bubbleShapes[index % bubbleShapes.length];

                            return (
                                <div key={index} className="p-6 flex flex-col items-center">
                                    <div className="relative flex flex-col items-center w-full my-12">
                                        {/* タイトル */}
                                        <h3 className="absolute z-10 text-lg font-bold text-white mb-3 rounded-full px-5 py-1 left-1/2 -top-5 -translate-x-1/2 whitespace-nowrap"
                                            style={{ backgroundColor: "rgb(227,159,0)" }}>
                                            {caseItem.title}
                                        </h3>

                                        {/* 不規則形状の吹き出し */}
                                        <div 
                                            className="relative bg-white px-8 py-6 text-gray-800 shadow-lg w-[320px] min-h-[180px] mx-auto text-left mb-6"
                                            style={bubbleStyle}
                                        >
                                            <div className="h-full flex items-center">
                                                <p className="w-full">{caseItem.text}</p>
                                            </div>
                                            
                                            {/* 矢印（形状に合わせて位置調整） */}
                                            <div 
                                                className="absolute -bottom-5 w-0 h-0 z-10"
                                                style={{
                                                    left: `${30 + (index * 20)}%`,
                                                    borderLeft: '18px solid transparent',
                                                    borderRight: '18px solid transparent',
                                                    borderTop: '24px solid white',
                                                    filter: "drop-shadow(0 2px 1px rgba(0,0,0,0.1))",
                                                    transform: `rotate(${index % 2 === 0 ? 5 : 10}deg)`
                                                }}
                                            ></div>
                                        </div>

                                        {/* 画像 */}
                                        <div
                                            className="mx-auto mt-10 rounded-lg"
                                            style={{
                                                background: "#fff",
                                                padding: "8px",
                                                display: "inline-block",
                                                boxShadow: "0 0 0 4px #fff",
                                                borderRadius: "50%"
                                            }}
                                        >
                                            <Image 
                                                src={caseItem.image} 
                                                alt={`悩みの画像 ${index + 1}`}
                                                width={180}
                                                height={90}
                                                className="rounded-lg"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* =============================================
            solution
            ============================================= */}
            <div className="relative -top-10 w-full  pt-25 rounded-4xl bg-white">
                <div className="flex justify-center items-end gap-4">
                    <Image 
                        src="/images/text_title/tittle_paca_X4.png" 
                        alt="tittle_paca_X4"
                        width={300}
                        height={100}
                        className=""
                        priority
                    />
                     <p className="text-center text-gray-700 mb-8">
                        &quot;s service is the solution!
                    </p>
                </div>

                <div className='text-center mb-15'>- - - - - -</div>
               

                {/* 装飾画像 */}
                <div className="absolute z-20 w-[45%] h-[45%] flex items-end justify-start pointer-events-none"
                    style={{
                        top: '0%',
                        left: '25%',
                        transform: "translate(-50%, -50%)"
                    }}>
                    <Image
                        src="/images/main_visual/sousyoku_2.png"
                        alt="装飾2"
                        width={220}
                        height={110}
                        className="mx-auto mb-2"
                        style={{ transform: 'scaleX(-1)' }}
                        priority
                    />
                </div>

                {/* ソリューション表示エリア */}
                <div className="relative w-full">
                    {/* 前のソリューションへ移動するボタン */}
                    {selectedIdx > 0 && (
                        <button
                            onClick={() => setSelectedIdx(selectedIdx - 1)}
                            className="absolute left-1/5 top-1/2 -translate-y-1/2 z-20 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition"
                            aria-label="Previous solution"
                            style={{backgroundColor: "rgb(227,159,0)" , transform: 'scaleX(-1)' }}
                        >
                             <svg width="30" height="30" viewBox="0 0 28 28" fill="none" >
                            <path d="M10 14h6M14 10l4 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="" />
                        </svg>
                        </button>
                    )}

                    {/* 左側のソリューション（1/3表示） */}
                    {selectedIdx > 0 && (
                        <div 
                            className="absolute left-0 top-1/2 -translate-y-1/2   w-[700px] h-[700px]  z-10"
                            style={{ transform: 'translateX(-80%)' }}
                            onClick={() => setSelectedIdx(selectedIdx - 1)}
                        >
                            <div className="relative h-full bg-white rounded-lg mx-auto flex flex-col overflow-hidden">
                                <div className="relative w-full h-[60%]">
                                    <Image
                                        src={solutions[selectedIdx - 1].image}
                                        alt={solutions[selectedIdx - 1].alt}
                                        fill
                                        className="object-cover w-full h-full rounded-3xl" 
                                        priority
                                    />
                                </div>
                                <div className="p-4 overflow-y-auto">
                                    <h4 className="font-bold text-xl my-2">{solutions[selectedIdx - 1].title}</h4>
                                    {/* descriptionが配列の場合に対応 */}
                                    {solutions[selectedIdx - 1].description.map((desc: string, i: number) => (
                                        <p
                                            key={i}
                                            className="text-gray-700 text-lg md:text-xl mb-3"
                                        >
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* メインソリューション */}
                    <div className="relative bg-white rounded-lg w-[700px] h-[700px] mx-auto text-left mb-6 z-20 overflow-hidden">
                        <div className="relative w-full h-[60%]">
                            <Image
                                src={solutions[selectedIdx].image}
                                alt={solutions[selectedIdx].alt}
                                fill
                                className="object-cover w-full h-full rounded-3xl" 
                                priority
                            />
                        </div>
                        <div className=" overflow-y-auto"> {/* 変更点 */}
                            <h3 className="font-bold text-2xl my-6">{solutions[selectedIdx].title}</h3>
                            {/* descriptionが配列の場合に対応 */}
                            {solutions[selectedIdx].description.map((desc: string, i: number) => (
                                        <p
                                            key={i}
                                            className="text-gray-700 text-lg md:text-xl mb-3"
                                        >
                                            {desc}
                                        </p>
                                    ))}
                        </div>
                    </div>

                    {/* 右側のソリューション（1/3表示） */}
                    {selectedIdx < solutions.length - 1 && (
                        <div 
                            className="absolute right-0 top-1/2 -translate-y-1/2  w-[700px] h-[700px]   z-10"
                            style={{ transform: 'translateX(80%)' }}
                            onClick={() => setSelectedIdx(selectedIdx + 1)}
                        >
                            <div className="relative h-full bg-white rounded-lg mx-auto flex flex-col">
                                <div className="relative w-full h-[60%]">
                                    <Image
                                        src={solutions[selectedIdx + 1].image}
                                        alt={solutions[selectedIdx + 1].alt}
                                        fill
                                        className="object-cover w-full h-full rounded-3xl" 
                                        priority
                                    />
                                </div>
                                <div className="p-4 min-h-[30%] overflow-y-auto"> {/* 変更点 */}
                                    <h4 className="font-bold text-xl mb-2">{solutions[selectedIdx + 1].title}</h4>
                                    {solutions[selectedIdx + 1].description.map((desc: string, i: number) => (
                                        <p
                                            key={i}
                                            className="text-gray-700 text-lg md:text-xl mb-3"
                                        >
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 次のソリューションへ移動するボタン */}
                    {selectedIdx < solutions.length - 1 && (
                        <button
                            onClick={() => setSelectedIdx(selectedIdx + 1)}
                            className="absolute right-1/5 top-1/2 -translate-y-1/2 z-20  text-white p-2 rounded-full shadow-md hover:bg-yellow-600 transition"
                            aria-label="Next solution"
                            style={{backgroundColor: "rgb(227,159,0)"}}
                        >                    
                        <svg width="30" height="30" viewBox="0 0 28 28" fill="none" >
                            <path d="M10 14h6M14 10l4 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="" />
                        </svg>
                        </button>
                    )}
                </div>

                {/* インジケーター */}
                {/* ゲージ表示 */}
                <div className="flex justify-center items-center mt-8 w-full">
                    <div className="relative w-[600px] max-w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-yellow-500 transition-all duration-300"
                            style={{
                                width: `${((selectedIdx + 1) / solutions.length) * 100}%`,
                                borderRadius: '9999px',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* =============================================
            how to use
            ============================================= */}
            {/* ソリューションセクション - デザイン完全維持 */}
            <div className="relative w-full min-h-[400px] bg-cover bg-top pb-100 bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/background/background_1.png')"
                }}>
                <div  className="pt-70">
                    {/* タイトルエリア */}
                    <div className="flex flex-col items-center">
                    <p className="text-base tracking-widest text-gray-500 mb-2">OUR SERVICES</p>
                    <Image src="/images/text_title/tittle_3_X4.png" 
                        alt="tittle_3_X4"
                        width={320}
                        height={110}
                        className="mx-auto mb-2"
                        priority/>
                    - - - - - -
                    </div>

                    <ul className="w-3/5 mx-auto mt-20">
                        {how_to.map((item, idx) => (
                            <li key={idx} className="relative flex items-center gap-10 py-6 px-15 bg-white rounded-2xl mb-10 justify-start shadow-lg">
                                <div className="flex-shrink-0 relative flex items-center justify-center">
                                    <Image
                                        src={`/images/how_to/icon_v${idx +1}.png`}
                                        alt={`icon_v${idx + 1}.png`}
                                        width={200}
                                        height={200}
                                        className="rounded-xl"
                                        priority
                                    />
                                    {/* 画像の下に次の画像まで点線を表示（最後の要素以外） */}
                                    {idx < how_to.length - 1 && (
                                        <div
                                            className="absolute left-1/2"
                                            style={{
                                                top: '100%',
                                                transform: 'translateX(-50%)',
                                                width: '2px',
                                                height: '90px', // 必要に応じて調整
                                                background: 'repeating-linear-gradient(to bottom, #E3A000, #E3A000 6px, transparent 6px, transparent 12px)',
                                                zIndex: 10,
                                                pointerEvents: 'none',
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="absolute top-0 -left-1" style={{transform: "translate(-50%, -50%)"}}>
                                    <Image
                                        src={`/images/how_to/step_${idx +1}.png`}
                                        alt={`step_${idx + 1}.png`}
                                        width={80}
                                        height={80}
                                        className="rounded-xl"
                                        priority
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="relative flex justify-center mt-15 w-1/2 m-auto">
                        <div className="mt-30 text-center w-full">
                                <Link href="/top">
                                    <Image
                                        src="/images/button/try_usingpaca.jpg"
                                        alt="trypaca_btn"
                                        width={1920}
                                        height={100}
                                        className="w-full h-auto mb-2 rounded-md shadow cursor-pointer"
                                        priority
                                    />
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* =============================================
            pictures
            ============================================= */}
            <div className="relative  -top-30 w-full  bg-cover bg-top bg-no-repeat">
            <div className="flex justify-between flex-nowrap gap-4 overflow-x-auto">
                <div className="relative w-[320px] h-[200px] flex-shrink-0 overflow-hidden rounded-xl">
                <Image
                    src="/images/img/2163893_s.jpg"
                    alt="2163893_s.jpg"
                    fill
                    className="object-cover rounded-xl"
                    priority
                    />
                </div>
                <div className="relative w-[320px] h-[200px] flex-shrink-0 overflow-hidden rounded-xl mt-15">               
                <Image
                    src="/images/img/C56217F1-4A79-4B70-BDD7-1F73CC07801D.JPG"
                    alt="C56217F1-4A79-4B70-BDD7-1F73CC07801D.JPG"
                    fill
                    className="object-cover"
                    priority
                    />
                </div>
                <div className="relative w-[320px] h-[200px] flex-shrink-0 overflow-hidden rounded-md">
                <Image
                    src="/images/img/ECE7F520-1BF3-4004-BA9C-5100D4008760.JPG"
                    alt="ECE7F520-1BF3-4004-BA9C-5100D4008760.JPG"
                    fill
                    className="object-cover rounded-xl"
                    priority
                    />
                </div>
                <div className="relative w-[320px] h-[200px] flex-shrink-0 overflow-hidden rounded-xl mt-15">
                <Image
                    src="/images/img/26801163_s.jpg"
                    alt="26801163_s.jpg"
                    fill
                    className="object-cover rounded-xl"
                    priority
                    />
                </div>
            </div>
            </div>

            {/* =============================================
            map
            ============================================= */}
            <div className="relative -top-10 w-full  pt-25 rounded-4xl bg-white">
                <div className="flex flex-col items-center">
                    <p className="text-base tracking-widest text-gray-500 mb-2">Introducing a selection of famous Japanese products</p>
                    <Image src="/images/text_title/tittle_4_X4.png" alt="tittle_4_X4"
                        width={320}
                        height={110}
                        className="mx-auto mb-2"
                        priority/>
                    - - - - - -
                </div>

               <Image
                    src="/images/map/_map.png"
                    alt="_map"
                    width={1920}
                    height={330}
                    className="w-[80%] mx-auto h-auto mb-2"
                    priority
                />
            </div>

            {/* =============================================
            contact
            ============================================= */}
            <div className="relative w-full py-25 " style={{ backgroundColor: 'rgb(229, 229, 228)' }}>
                <div className="flex flex-col items-center">
                    <p className="text-base tracking-widest text-gray-500 mb-2">Introducing a selection of famous Japanese products</p>
                    <Image src="/images/text_title/tittle_4.png" alt="title_1"
                        width={320}
                        height={110}
                        className="mx-auto mb-2"
                        priority/>
                    - - - - - -

                    <div className="flex justify-center mt-15">
                        <Link href="/">
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

                <div className="absolute z-20 w-[45%] h-[45%] flex items-end justify-start pointer-events-none"
                    style={{
                        top: '0%',
                        right: '0%',
                        transform: "scaleX(-1)"
                    }}>
                    <Image
                        src="/images/main_visual/sousyoku_2.png"
                        alt="装飾2"
                        width={220}
                        height={110}
                        className="mx-auto mb-2"
                        style={{ transform: 'scaleX(-1)' }}
                        priority
                    />
                </div>

                <div className="absolute z-20 w-[45%] h-[45%] flex items-end justify-start pointer-events-none"
                    style={{
                        bottom: '0%',
                        left: '0%',
                        transform: "scaleX(-1)"
                    }}>
                    <Image
                        src="/images/main_visual/sousyoku_3.png"
                        alt="装飾3"
                        width={220}
                        height={110}
                        className="mx-auto mb-2"
                        style={{ transform: 'scaleX(-1)' }}
                        priority
                    />
                </div>
            </div>
            
            <HomeFooter />
        </>
    );
}

