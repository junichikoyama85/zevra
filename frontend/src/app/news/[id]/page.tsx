'use client' 
import Link from 'next/link';
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import {useMswReady} from '../../../../hooks/useMswReady';
import {use, useEffect, useState} from 'react';
import Image from 'next/image';

interface NewsItem {
    id: string;
    title: string;
    content: string;
    date: string;
    category: string;
    image: string;
    author: string;
}


export default function NewsDetailPage({params} : {
    params : Promise < {
        id: string
    } >
}) {
    const {id} = use(params);
    const [newsDetailData, setNewsDetailData] = useState < NewsItem | null > (null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState < string | null > (null);
    const isMswReady = useMswReady();

    useEffect(() => {
        if (! isMswReady || !id) 
            return;
        

        const fetchNewsDetail = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/news/${id}`);
                if (! response.ok) 
                    throw new Error('ニュースの取得に失敗しました');
                


                const data = await response.json();
                setNewsDetailData(data);
            } catch (error) {
                console.error('Error fetching news:', error);
                setError('ニュースの読み込み中にエラーが発生しました');
            } finally {
                setIsLoading(false);
            }
        };

        fetchNewsDetail();
    }, [isMswReady, id]);

    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <p>読み込み中...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center text-red-500">
                <p>{error}</p>
                <Link href="/top" className="mt-4 inline-block text-blue-600 hover:underline">
                    トップに戻る
                </Link>
            </div>
        );
    }

    if (!newsDetailData) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <p>ニュースが見つかりませんでした</p>
                <Link href="/top" className="mt-4 inline-block text-blue-600 hover:underline">
                    トップに戻る
                </Link>
            </div>
        );
    }

    return (
        <div style={
            {
                backgroundColor: "#f4f4f4"
            }
        }>
            <HomeHeader/>
            <div className="max-w-4xl mx-auto px-4 py-30">
                {/* タイトル */}
                <h1 className="font-['NotoSansCJKjp-Medium']"
                    style={
                        {
                            fontSize: "38pt",
                            color: "#252525"
                        }
                }>
                    {
                    newsDetailData.title
                } </h1>

                {/* 本文 */}
                <div className="mt-15"
                    style={
                        {
                            fontSize: "16pt",
                            color: "#252525"
                        }
                }>
                    {
                    newsDetailData.content.split('\n').map((paragraph, i) => (
                        <p key={i}
                            className="mb-6 leading-relaxed">
                            {
                            paragraph.trim()
                        } </p>
                    ))
                } </div>

                {/* メタ情報 */}
                <div className="my-8 font-['Poppins-Regular']"
                    style={
                        {
                            fontSize: "14pt",
                            color: "#252525"
                        }
                }>
                    <span className="mr-8">
                        {
                        newsDetailData.date
                    }</span>
                    <span>INFOMATION</span>
                </div>

                {/* カテゴリタグ */}
                <span className={
                        `flex items-center justify-center text-xm rounded-full text-white shrink-0
                                        ${
                            newsDetailData.category === 'Zevra' ? 'bg-[#252525]' : newsDetailData.category === 'paca!' ? 'bg-[#e59d00]' : 'bg-gray-200 text-gray-600'
                        }
                                    `
                    }
                    style={
                        {
                            width: '80px',
                            height: '30px',
                            fontSize: "14pt"
                        }
                }>
                    {
                    newsDetailData.category
                } </span>

                {/* メイン画像 */}
                <div className="relative w-full h-64 md:h-96 my-15 rounded-lg overflow-hidden shadow-lg">
                    <Image src={'/images/about/about_us_top_pc.png'}
                        alt={
                            newsDetailData.title
                        }
                        fill
                        className="object-cover"
                        priority/>
                </div>

               <div className="my-12 text-[#252525]">
                   {/* 大見出し */}
                   <h1 className="font-['NotoSansCJKjp-Medium'] mb-6 border-b-2 border-[#454545] pb-2" style={{fontSize:"30pt"}}>
                       これは大見出しです
                   </h1>
                   {/* 中見だし */}
                   <h2 className=" font-['NotoSansCJKjp-Medium']  mb-4" style={{fontSize:"25pt"}}>
                       これは中見だしです
                   </h2>
                   {/* 小見だし */}
                   <h3 className="" style={{fontSize:"20pt"}}>
                       これは小見だしです
                   </h3>
                   {/* 本文 */}
                   <p className="my-15" style={{fontSize:"16pt"}}>
                       本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。
                   </p>

                   <span className='text-[#454545]'style={{fontSize:"14pt"}}>※注釈が入ります</span>

                    <div className='text-[#252525]'style={{fontSize:"16pt"}}>
                        <ul>
                            <li>・中身リストが入ります。</li>
                            <li>・中身リストが入ります。</li>
                            <li>・中身リストが入ります。</li>
                        </ul>

                        <ul className='mt-15'>
                            <li>1.中身リストが入ります。</li>
                            <li>2.中身リストが入ります。</li>
                            <li>3.中身リストが入ります。</li>
                        </ul>
                    </div>
               </div>

                <div className="mt-30 text-center w-full">
                        <Link href="/about#news">
                        <Image
                            src="/images/button/news.jpg"
                            alt="contact_btn"
                            width={400}
                            height={100}
                            className="mx-auto mb-2 rounded-md shadow cursor-pointer"
                            priority
                        />
                        </Link>
                </div>

            </div>
            <div className="relative w-full py-25 bg-white">
                <div className="flex flex-col items-center">
                    <p className="text-base tracking-widest text-gray-500 mb-2">Introducing a selection of famous Japanese products</p>
                    <Image src="/images/text_title/tittle_4_X4.png" alt="title_1"
                        width={320}
                        height={110}
                        className="mx-auto mb-2"
                        priority/>
                    - - - - - -
                    <div className="flex justify-center mt-15">
                        <Link href="/">
                            <Image src="/images/button/contact.png" alt="contact_btn"
                                width={640}
                                height={50}
                                className="mx-auto mb-2 rounded-md shadow cursor-pointer"
                                priority/>
                        </Link>
                    </div>
                </div>


            </div>
            <HomeFooter/>
        </div>
    );
}
