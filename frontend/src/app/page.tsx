"use client"
import Link from 'next/link';
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import Image from 'next/image';
import { useState } from 'react';

const solutions = [
    {
      image: "/images/solution/solution_1.png",
      alt: "全国各地の特産品",
      title: "Simple, effortless, and stress-free",
      description:[ "Planning a trip takes time—flights, hotels, itineraries... It can be overwhelming." ,"With paca!, there’s no hassle. Our smart ordering system and AI concierge make the experience smooth and easy—just relax and enjoy."]
    },
    {
      image: "/images/solution/solution_2.png",
      alt: "地域限定の逸品",
      title: "Experience regional specialties from all over Japan, delivered to your door",
      description: ["We bring you local products that are usually only available in specific regions.","Stay comfortably at your accommodation while discovering the flavors of Japan—no need to travel far and wide."]
    },
    {
      image: "/images/solution/solution_3.png",
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
            <div className="relative w-full h-screen" style={{backgroundColor:"#f8f7f1"}}>
                {/* PC用背景画像 */}
                <Image
                  src="/images/main_visual/back_mv.png"
                  alt="back_mv"
                  fill
                  className="object-cover hidden sm:block"
                  priority
                />
                {/* スマホ用背景画像 */}
                <Image
                  src="/images/main_visual/sp_back_mv.png"
                  alt="sp_back_mv"
                  fill
                  className="object-cover block sm:hidden"
                  priority
                />
                {/* PC（sm以上）の場合は右側中央、スマホ（sm未満）の場合は上部中央に配置 */}
                <div>
                  {/* PC用配置 */}
                  <div className="absolute right-[15%] top-1/2 transform -translate-y-1/2 z-10 w-[17%] h-1/2 flex items-center justify-start pointer-events-none hidden sm:flex">
                    <Image src="/images/main_visual/_paca_mv_1.png" alt="_paca_mv_1" fill className="object-contain" priority/>
                  </div>
                  {/* スマホ用配置 */}
                  <div className="absolute right-0 top-[15%] transform -translate-x-1/2 z-10 w-[35vw] h-[35vw] flex items-start justify-center pointer-events-none sm:hidden">
                    <Image src="/images/main_visual/_paca_mv_1.png" alt="_paca_mv_1" fill className="object-contain" priority/>
                  </div>
                </div>
                <div
                  className="absolute left-1/2 z-10 w-[18%] h-1/3 flex items-start justify-center pointer-events-none hidden sm:flex"
                  style={{
                    top: '60%',
                    left: '40%',
                    transform: 'rotate(-20deg)'
                  }}
                >
                  <Image src="/images/main_visual/_paca_mv_2.png" alt="_paca_mv_2" fill className="object-contain" priority />
                </div>
                {/* PC（sm以上）の場合は左上、スマホ（sm未満）の場合は下部中央に配置 */}
                {/* PC用配置 */}
                <div className="absolute z-10 w-[30%] h-1/2 flex items-start justify-end pointer-events-none hidden sm:flex"
                    style={{
                        top: '15%',
                        left: '7%'
                    }}>
                    <Image src="/images/main_visual/_paca_mv_3.png" alt="_paca_mv_3" fill className="object-contain" priority/>
                </div>
                {/* スマホ用配置 */}
                <div className="absolute z-10 w-[50vw] h-[50vw] flex items-end justify-center pointer-events-none sm:hidden"
                    style={{
                        bottom: '10%',
                        left: '41%',
                        transform: 'translateX(-50%)'
                    }}>
                    <Image src="/images/main_visual/_paca_mv_3.png" alt="_paca_mv_3" fill className="object-contain" priority/>
                </div>
                {/* PC（sm以上）用配置 */}
                <div
                  className="absolute z-10 w-[18%] h-1/3 flex items-start justify-end pointer-events-none hidden sm:flex"
                  style={{
                    top: '15%',
                    left: '5%',
                    transform: 'rotate(-10deg)'
                  }}
                >
                  <Image src="/images/main_visual/sousyoku_3.png" alt="sousyoku_3.png" fill className="object-contain" priority />
                </div>
                {/* スマホ（sm未満）用配置：大きく表示 */}
                <div
                  className="absolute z-10 w-[30vw] h-[30vw] flex items-start justify-end pointer-events-none sm:hidden"
                  style={{
                    top: '25%',
                    left: '0%',
                    transform: 'rotate(-10deg)'
                  }}
                >
                  <Image src="/images/main_visual/sousyoku_3.png" alt="sousyoku_3.png" fill className="object-contain" priority />
                </div>
                {/* PC（sm以上）は元の位置、スマホ（sm未満）は左側に配置 */}
                <div>
                  {/* PC用配置 */}
                  <div
                    className="absolute z-10 w-[9%] h-[12%] flex items-start justify-end pointer-events-none hidden sm:flex"
                    style={{
                      top: '66%',
                      left: '33%',
                      transform: 'rotate(-10deg)'
                    }}
                  >
                    <Image src="/images/main_visual/dango.png" alt="団子" fill className="object-contain" priority />
                  </div>
                  {/* スマホ用配置（左寄せ） */}
                  <div
                    className="absolute z-10 w-[18vw] h-[18vw] flex items-start justify-start pointer-events-none sm:hidden"
                    style={{
                      top: '40%',
                      left: '0%',
                      transform: 'rotate(-10deg)'
                    }}
                  >
                    <Image src="/images/main_visual/dango.png" alt="団子" fill className="object-contain" priority />
                  </div>
                </div>
                {/* PC用配置（sm以上） */}
                <div
                  className="absolute z-10 w-[9%] h-[12%] flex items-start justify-end pointer-events-none hidden sm:flex"
                  style={{
                    top: '75%',
                    left: '28%',
                    transform: 'rotate(-20deg)'
                  }}
                >
                  <Image src="/images/main_visual/kyusu.png" alt="急須" fill className="object-contain" priority />
                </div>
                {/* スマホ用配置（位置を変更） */}
                <div
                  className="absolute z-10 w-[18vw] h-[18vw] flex items-start justify-start pointer-events-none sm:hidden"
                  style={{
                    top: '60%',
                    right: '25%',
                    transform: 'rotate(-20deg)'
                  }}
                >
                  <Image src="/images/main_visual/kyusu.png" alt="急須" fill className="object-contain" priority />
                </div>
                {/* PC用配置（sm以上） */}
                <div
                  className="absolute z-20 w-[10%] h-[13%] flex items-center justify-center pointer-events-none hidden sm:flex"
                  style={{
                    top: '10%',
                    left: '30%',
                  }}
                >
                  <Image src="/images/main_visual/sennsu.png" alt="扇子" fill className="object-contain" priority />
                </div>
                {/* スマホ用配置（位置を変更） */}
                <div
                  className="absolute z-20 w-[18vw] h-[18vw] flex items-center justify-center pointer-events-none sm:hidden"
                  style={{
                    top: '15%',
                    left: '20%',
                  }}
                >
                  <Image src="/images/main_visual/sennsu.png" alt="扇子" fill className="object-contain" priority />
                </div>
                {/* PC用配置（sm以上） */}
                <div
                  className="absolute z-20 w-[10%] h-[13%] flex items-center justify-center pointer-events-none hidden sm:flex"
                  style={{
                    top: '15%',
                    left: '38%',
                    transform: 'rotate(20deg)'
                  }}
                >
                  <Image src="/images/main_visual/daruma.png" alt="達磨" fill className="object-contain" priority />
                </div>
                {/* スマホ用配置（位置を調整） */}
                <div
                  className="absolute z-20 w-[15vw] h-[15vw] flex items-center justify-center pointer-events-none sm:hidden"
                  style={{
                    top: '25%',
                    left: '33%',
                    transform: 'rotate(20deg)'
                  }}
                >
                  <Image src="/images/main_visual/daruma.png" alt="達磨" fill className="object-contain" priority />
                </div>
                {/* PC用（sm以上で表示） */}
                <div
                  className="absolute z-20 w-[18%] h-[20%] flex items-center justify-center pointer-events-none hidden sm:flex"
                  style={{
                    top: '14%',
                    left: '52%',
                    transform: 'rotate(0deg)'
                  }}
                >
                  <Image src="/images/main_visual/sousyoku_2.png" alt="sousyoku_2" fill className="object-contain" priority />
                </div>
                {/* スマホ用（sm未満で表示、位置を変更） */}
                <div
                  className="absolute z-20 w-[30vw] h-[20vw] flex items-center justify-center pointer-events-none sm:hidden"
                  style={{
                    top: '28%',
                    right: '0%',
                    transform: 'rotate(-10deg)'
                  }}
                >
                  <Image src="/images/main_visual/sousyoku_2.png" alt="sousyoku_2" fill className="object-contain" priority />
                </div>
                {/* PC用（sm以上で表示） */}
                <div
                    className="absolute z-20 w-[24%] h-[33%] flex items-start justify-end pointer-events-none font-['Poppins-Bold'] hidden sm:flex"
                    style={{
                        top: '62%',
                        left: '8%',
                        transform: 'rotate(200deg)'
                    }}>
                    <Image src="/images/main_visual/sousyoku_4.png" alt="sousyoku_4" fill className="object-contain" priority/>
                </div>
                {/* スマホ用（sm未満で表示、位置を変更） */}
                <div
                    className="absolute z-20 w-[33vw] h-[33vw] flex items-end justify-center pointer-events-none font-['Poppins-Bold'] sm:hidden"
                    style={{
                        bottom: '20%',
                        left: '-5%',
                        transform: 'rotate(200deg)'
                    }}>
                    <Image src="/images/main_visual/sousyoku_4.png" alt="sousyoku_4" fill className="object-contain" priority/>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <p className="bg-opacity-70 px-4 font-['Poppins-SemiBold'] text-center" style={{color:"#454545"}}>
                        <span className="text-[13pt] md:text-[17pt] block sm:inline">
                            The whole&nbsp;&quot;Made in JAPAN&quot;
                        </span>
                        <span className="text-[13pt] md:text-[17pt] block sm:inline">
                            &nbsp;at your fingertips
                        </span>
                    </p>
                    <div
                        className="
                            relative
                            w-[15rem] h-[6rem]
                            sm:w-[24rem] sm:h-[11rem]
                            md:w-[33rem] md:h-[15rem]
                            flex items-center justify-center
                        "
                    >
                        <Image
                            src="/images/text_title/tittle_paca_mv_X2.png"
                            alt="paca! メインタイトル"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                <div className="absolute z-20 w-[9%] h-[12%] flex items-end justify-start pointer-events-none hidden sm:flex"
                    style={{
                        top: '65%',
                        left: '53%',
                    }}>
                    <Image src="/images/main_visual/tokkuri.png" alt="徳利" fill className="object-contain" priority/>
                </div>
                {/* PC画面とスマホ画面で位置を切り替える */}
                {/* PC用（sm以上で表示） */}
                <div
                    className="
                        absolute z-20
                        hidden sm:flex
                        w-[9%] h-[9%]
                        flex items-end justify-start pointer-events-none
                    "
                    style={{
                        top: '75%',
                        left: '63%',
                        transform: 'rotate(-30deg)'
                    }}>
                    <Image src="/images/main_visual/kani.png" alt="蟹" fill className="object-contain" priority/>
                </div>
                {/* スマホ用（sm未満で表示） */}
                <div
                    className="
                        absolute z-20
                        flex sm:hidden
                        w-[18%] h-[18%]
                        items-end justify-start pointer-events-none
                    "
                    style={{
                        bottom: '15%',
                        right: '20%',
                        transform: 'rotate(-15deg)'
                    }}>
                    <Image src="/images/main_visual/kani.png" alt="蟹" fill className="object-contain" priority/>
                </div>
                {/* PC用（sm以上で表示） */}
                <div
                    className="absolute z-20 w-[10%] h-[40%] flex items-end justify-start pointer-events-none hidden sm:flex"
                    style={{
                        top: '40%',
                        right: '10%',
                        transform: 'rotate(0deg)'
                    }}
                >
                    <Image src="/images/main_visual/sousyoku_1.png" alt="装飾1" fill className="object-contain" priority/>
                </div>
                {/* スマホ用（sm未満で表示） */}
                <div
                    className="absolute z-20 w-[25%] h-[25%] flex items-end justify-start pointer-events-none flex sm:hidden"
                    style={{
                        top: '45%',
                        right: '0%',
                        transform: 'rotate(0deg)'
                    }}
                >
                    <Image src="/images/main_visual/sousyoku_1.png" alt="装飾1" fill className="object-contain" priority/>
                </div>
                {/* 右下に縦書きで「scroll」と下に棒線 */}
                <div className="absolute bottom-6 right-6 z-30 pointer-events-none flex flex-col items-center" style={{color:"#252525"}}>
                    <span
                        className="text-sm tracking-widest font-['Poppins-SemiBold']  select-none"
                        style={{
                            writingMode: 'vertical-rl',
                            letterSpacing: '0.2em',
                            fontSize: '20pt'
                        }}
                    >
                        <span className="hidden md:inline" style={{ fontSize: '14pt' }}>scroll</span>
                        <span className="md:hidden">scroll</span>
                    </span>
                    <span
                        className="block mt-2"
                        style={{
                            width: '2px',
                            height: '40px',
                            borderRadius: '1px',
                            backgroundColor: "#252525"
                        }}
                    ></span>
                </div>
            </div>

            {/* =============================================
            ourr service
            WHAT IS PACA!
            ============================================= */}
            <div className="py-12 sm:py-24 bg-[#f7f6f0] relative z-10">
                <div className="container mx-auto flex flex-col items-center">
                    {/* タイトルエリア */}
                    <div className="flex flex-col items-center mb-10">
                        <p
                            className="tracking-widest text-gray-500 mb-2 font-['Poppins-Medium']"
                            style={{
                                color: "#454545",
                                fontSize: "16pt",
                            }}
                        >
                            <span className="block sm:hidden" style={{ fontSize: "15pt" }}>OUR SERVICES</span>
                            <span className="hidden sm:block" style={{ fontSize: "18pt" }}>OUR SERVICES</span>
                        </p>
                        <div className="w-[250px] h-[50px] sm:w-[400px] sm:h-[110px] mx-auto mb-2 relative">
                            <Image
                                src="/images/text_title/tittle_1_X4.png"
                                alt="tittle_1_X4"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="hidden sm:block text-xl" style={{ letterSpacing: "0.2em" ,    color: "#454545",}}>- - - - - -</span>
                        <span className="block sm:hidden" style={{ fontSize: "15pt",    color: "#454545", }}>- - - - - -</span>
                    </div>

                    {/* サービス説明エリア */}
                    <div className="w-[80%] text-center mx-auto">
                        <h2
                            className="font-['Poppins-SemiBold']  mx-auto text-center flex justify-center"
                            style={{
                                fontSize: '25pt',
                                color: "#252525",
                            }}
                        >
                            <span className="block sm:hidden" style={{ fontSize: '15pt' }}>
                                A More Meaningful Way to Experience Japan
                            </span>
                            <span className="hidden sm:flex items-center justify-center whitespace-nowrap w-full">
                                A More Meaningful Way to Experience Japan
                            </span>
                        </h2>
                        <div className="text-left">
                            <div
                                className="space-y-8 my-10 font-['Poppins-Medium'] text-[15pt] sm:text-[18pt]  mx-auto"
                                style={{ color: "#252525" }}
                            >
                                <p className="">
                                    paca! is a service designed to make your stay in Japan even more special.
                                </p>
                                <p className="">
                                    We deliver handpicked local specialties—full of character and charm that are usually only available in specific regions of the country.
                                </p>
                                <p className="">
                                    You simply pick up your box at your convenience, and enjoy it in the comfort of your room.
                                </p>
                                <p className="">
                                    Together, let’s explore the hidden gems of Japan—regional treasures that even many locals have yet to discover.
                                </p>
                                <p className="">
                                    paca! offers you a deeper connection to Japanese culture, filled with the spirit of omotenashi—Japan’s unique sense of heartfelt hospitality.
                                </p>
                            </div>
                        </div>
                     

     
                    </div>
                </div>

                <div
                    className="
                        absolute z-20 flex items-end justify-start pointer-events-none
                        sm:top-[12%] sm:right-[5%] sm:translate-x-[-50%] sm:translate-y-[-50%]
                        top-[0%] right-[0%]
                    "
                >
                    <Image
                        src="/images/about/sousyoku_5.png"
                        alt="装飾5"
                        width={110}
                        height={110}
                        priority
                        className="sm:w-[180px] sm:h-[120px] w-[110px] h-[80px]"
                    />
                </div>
                <div
                    className={`
                        absolute z-20 flex items-end justify-start pointer-events-none
                        sm:top-[20%] sm:left-[10%]
                        top-[13%] left-[-3%]
                    `}
                >
                    <Image
                        src="/images/about/sousyoku_7.png"
                        alt="装飾5"
                        width={200}
                        height={200}
                        className="mx-auto mb-2 sm:w-[250px] sm:h-[250px] w-[110px] h-[110px]"
                        priority
                    />
                </div>
                {/* 装飾6：スマホ画面では非表示 */}
                <div
                    className="absolute z-20 flex items-end justify-start pointer-events-none hidden sm:flex"
                    style={{
                        bottom: '30%',
                        right: '15%',
                        transform: 'rotate(200deg)',
                    }}
                >
                    <Image
                        src="/images/about/sousyoku_6.png"
                        alt="装飾6"
                        width={140}
                        height={70}
                        className="mx-auto mb-2"
                        priority
                    />
                </div>
                {/* 装飾8：スマホ画面では非表示 */}
                <div
                    className="absolute z-20 w-[25%] h-[30%] flex items-end justify-start pointer-events-none hidden sm:flex"
                    style={{
                        bottom: '-20%',
                        right: '0',
                        transform: 'rotate(200deg)',
                    }}
                >
                    <Image
                        src="/images/about/sousyoku_8.png"
                        alt="装飾8"
                        width={140}
                        height={70}
                        className="mx-auto mb-2"
                        priority
                    />
                </div>

                                   {/* 「詳しく見る」ボタン */}
              
                <div className="mt-15 sm:mt-30 text-center w-[80%] mx-auto">
                    <Link href="/top">
                        <Image
                            src="/images/button/try_usingpaca.jpg"
                            alt="try_usingpaca"
                            width={700}
                            height={450} // 高さを広くしました
                            className="mx-auto mb-2 rounded-md shadow cursor-pointer"
                            priority
                        />
                    </Link>
                </div>
                            
            </div>

            {/* =============================================
            Do you have any of the following problems?
            SITUATIONS
            ============================================= */}
            <div
                className="
                    relative w-full min-h-[400px] pt-60 sm:pt-80 bg-[#f7f6f0] bg-cover bg-top bg-no-repeat pb-30
                    bg-[url('/images/background/sp_background_1.png')]
                    sm:bg-[url('/images/background/background_2.png')]
                "
            >
                <div className=" mx-auto px-4">
                    {/* タイトルエリア */}
                    <div className="flex flex-col items-center mb-10">
                        <p
                            className="tracking-widest text-gray-500 mb-2 font-['Poppins-Medium'] text-center"
                            style={{
                                color: "#454545",
                                fontSize: "16pt",
                            }}
                        >
                            <span className="block sm:hidden" style={{ fontSize: "9pt" }}>Do you have any of the following problems?</span>
                            <span className="hidden sm:block" style={{ fontSize: "18pt" }}>Do you have any of the following problems?</span>
                        </p>
                        <div className="w-[250px] h-[50px] sm:w-[400px] sm:h-[110px] mx-auto mb-2 relative">
                            <Image
                                src="/images/text_title/tittle_2_X4.png"
                                alt="tittle_1_X4"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="hidden sm:block text-xl" style={{ letterSpacing: "0.2em" ,    color: "#454545",}}>- - - - - -</span>
                        <span className="block sm:hidden" style={{ fontSize: "15pt",    color: "#454545", }}>- - - - - -</span>
                    </div>

                    {/* ケーススタディ */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">  
                        <div className="flex flex-col items-center gap-6 w-[90vw] max-w-[450px] mx-auto mb-4">
                            <div className="relative w-full h-[300px] sm:h-[350px]">
                                <Image 
                                    src="/images/problem/pc_text_nayami_01.png" 
                                    alt="tittle_2_X4"
                                    fill
                                    className="object-cover rounded-xl"
                                    priority
                                />
                                <div
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        top: '45%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <p
                                        className="font-['Poppins-Medium'] w-[90%] sm:w-[80%] text-[12pt] sm:text-[16pt]"
                                        style={{ lineHeight: "1.5" }}
                                    >
                                        &ldquo;Third time in Japan.<br />
                                        Sushi? Check. Kimono? Done.<br />
                                        Now I wanna see the real Japan—like the kind only locals know.&ldquo;
                                    </p>
                                </div>
                            </div>
                            <div className="relative w-full h-[200px] sm:h-[250px]">
                                <Image 
                                    src="/images/problem/nayami_01_X2.png" 
                                    alt="悩み画像1"
                                    fill
                                    className="object-contain rounded-xl"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6 w-[90vw] max-w-[450px] mx-auto mb-4">
                            <div className="relative w-full h-[300px] sm:h-[350px]">
                                <Image 
                                    src="/images/problem/pc_text_nayami_02.png" 
                                    alt="pc_text_nayami_02"
                                    fill
                                    className="object-cover rounded-xl"
                                    priority
                                />
                                <div
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        top: '45%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <p className="font-['Poppins-Medium'] w-[90%] sm:w-[80%] text-[12pt] sm:text-[16pt]" style={{  lineHeight: "1.5", }}>
                                    &ldquo;Was dying to do a sake/shochu/whisky tasting in Japan...<br />
                                        Didn’t know they’re made in totally different regions! &ldquo;
                                    </p>
                                </div>
                            </div>
                            <div className="relative w-full h-[200px] sm:h-[250px]">
                                <Image 
                                    src="/images/problem/nayami_02_X2.png" 
                                    alt="nayami_02_X2"
                                    fill
                                    className="object-contain rounded-xl"
                                    priority
                                    style={{ background: "transparent" }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6 w-[90vw] max-w-[450px] mx-auto mb-4">
                            <div className="relative w-full h-[300px] sm:h-[350px]">
                                <Image 
                                    src="/images/problem/pc_text_nayami_03.png" 
                                    alt="pc_text_nayami_03"
                                    fill
                                    className="object-cover rounded-xl"
                                    priority
                                />
                                <div
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        top: '40%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <p className="font-['Poppins-Medium'] w-[90%] sm:w-[80%] text-[12pt] sm:text-[16pt]" style={{ lineHeight: "1.5", }}>
                                    &ldquo;Every time I see the Ramen store there&apos; s a huge line...<br />
                                        But wait—Hotel + the Ramen at my time, no line, no problem!? &ldquo;
                                    </p>
                                </div>
                            </div>
                            <div className="relative w-full h-[200px] sm:h-[250px]">
                                <Image 
                                    src="/images/problem/nayami_01_X2.png" 
                                    alt="悩み画像1"
                                    fill
                                    className="object-contain rounded-xl"
                                    priority
                                    style={{ background: "transparent" }}
                                />
                            </div>
                        </div>
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
                     <p className="text-center text-gray-700 mb-8 font-['Poppins-Medium']" style={{fontSize:"18pt", color:"#454545"}}>
                        &quot;s service is the solution!
                    </p>
                </div>

                <div className='text-center mb-15'>- - - - - -</div>
               

       
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

          
                <div className="relative w-full">
              
                    {selectedIdx > 0 && (
                        <button
                            onClick={() => setSelectedIdx(selectedIdx - 1)}
                            className="absolute left-1/5 top-1/2 -translate-y-1/2 z-20 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition"
                            aria-label="Previous solution"
                            style={{backgroundColor: "rgb(227,159,0)" , transform: 'scaleX(-1)' }}
                        >
                             <svg width="45" height="45" viewBox="0 0 28 28" fill="none" >
                            <path d="M10 14h6M14 10l4 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="" />
                        </svg>
                        </button>
                    )}

              
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
                        <div className=" overflow-y-auto" style={{ fontSize:"20pt" , color:"#252525"}}> 
                            <h3 className="font-bold text-2xl my-6 font-['poppins-SemiBold']" style={{ fontSize:"20pt" }}>{solutions[selectedIdx].title}</h3>
                         
                            {solutions[selectedIdx].description.map((desc: string, i: number) => (
                                        <p
                                            key={i}
                                            className="text-gray-700 text-lg md:text-xl mb-3"
                                            style={{ fontSize:"16pt" }}
                                        >
                                            {desc}
                                        </p>
                                    ))}
                        </div>
                    </div>

       
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
                                <div className="p-4 min-h-[30%] overflow-y-auto"> 
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

                
                    {selectedIdx < solutions.length - 1 && (
                        <button
                            onClick={() => setSelectedIdx(selectedIdx + 1)}
                            className="absolute right-1/5 top-1/2 -translate-y-1/2 z-20  text-white p-2 rounded-full shadow-md hover:bg-yellow-600 transition"
                            aria-label="Next solution"
                            style={{backgroundColor: "rgb(227,159,0)"}}
                        >                    
                        <svg width="45" height="45" viewBox="0 0 28 28" fill="none" >
                            <path d="M10 14h6M14 10l4 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="" />
                        </svg>
                        </button>
                    )}
                </div>

  
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
            Introducing 4steps to paca!
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
                    <p className="text-base tracking-widest text-gray-500 mb-2 font-['poppins-Medium']" style={{fontSize:"18pt" , color:"#454545"}}>Intoroducing 4steps to use paca!</p>
                    <Image src="/images/text_title/tittle_3_X4.png" 
                        alt="tittle_3_X4"
                        width={450}
                        height={150}
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
                                    <p className="font-['poppins-Medium']" style={{ color:"#454545" , fontSize: "20pt"}}>
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
                                alt="try_usingpaca"
                                width={800}
                                height={100}
                                className="mx-auto mb-2 rounded-md shadow cursor-pointer"
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
            <div className="relative -top-30 w-full bg-cover bg-top bg-no-repeat">
                <div className="flex flex-nowrap gap-4 w-full">
                    <div className="relative flex-1 h-[300px] overflow-hidden rounded-xl">
                        <Image
                            src="/images/lotation/lotation_01.png"
                            alt="2163893_s.jpg"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                    <div className="relative flex-1 h-[300px] overflow-hidden rounded-xl mt-15">
                        <Image
                            src="/images/lotation/lotation_02.png"
                            alt="C56217F1-4A79-4B70-BDD7-1F73CC07801D.JPG"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                    <div className="relative flex-1 h-[300px] overflow-hidden rounded-xl">
                        <Image
                            src="/images/lotation/lotation_03.png"
                            alt="ECE7F520-1BF3-4004-BA9C-5100D4008760.JPG"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                    <div className="relative flex-1 h-[300px] overflow-hidden rounded-xl mt-15">
                        <Image
                            src="/images/lotation/lotation_04.png"
                            alt="26801163_s.jpg"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* =============================================
            Introducing a selection of famous Japanese products
            pick up
            ============================================= */}
            <div className="relative -top-10 w-full  pt-25 rounded-4xl bg-white">
                <div className="flex flex-col items-center">
                    <p className="text-base tracking-widest text-gray-500 mb-2 font-['poppins-Medium']" style={{color :"#454545", fontSize: "18pt"}}>Introducing a selection of famous Japanese products</p>
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
            Please feel to contact us!
            contact
            ============================================= */}
            <div className="relative w-full py-25 " style={{ backgroundColor: 'rgb(229, 229, 228)' }}>
                <div className="flex flex-col items-center">
                    <p className="font-['poppins-Medium']" style={{color:"#454545" , fontSize:"18pt"}}>Please feel to contact us!</p>
                    <Image src="/images/text_title/tittle_4_X4.png" alt="tittle_4"
                        width={320}
                        height={110}
                        className="mx-auto mb-2"
                        priority/>
                    - - - - - -

                    <div className="mt-15 text-center w-full">
                            <Link href="/">
                                <button
                                    className="relative w-[650px] h-[100px] bg-black text-white rounded-xl text-3xl font-['Poppins-SemiBold'] flex items-center justify-center mx-auto shadow-lg transition hover:bg-gray-800"
                                    style={{
                                        backgroundColor: '#454545',
                                        fontSize: '22pt',
                                        borderRadius: '10px' // さらに角を強調
                                    }}
                                >
                                    CONTACT
                                </button>
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

