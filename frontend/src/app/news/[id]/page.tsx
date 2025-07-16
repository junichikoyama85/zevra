'use client' 
import Link from 'next/link';
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import {useMswReady} from '../../../../hooks/useMswReady';
import { use, useEffect, useState } from 'react';

interface NewsItem {
    id: string;
    title: string;
    content: string;
    date: string;
    category: string;
    image: string;
    author: string;
}

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // paramsをアンラップ
    const [newsDetailData, setNewsDetailData] = useState < NewsItem | null > (null);
    const isMswReady = useMswReady();

    useEffect(() => {
        if (!isMswReady || !id) return;
        
        const fetchNewsDetail = async () => {
            try {
                const response = await fetch(`/api/news/${id}`);
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setNewsDetailData(data);
            } catch (error) {
                console.error('ニュースの取得に失敗しました:', error);
            }
        };

        fetchNewsDetail();
    }, [isMswReady, id]); // id を依存配列に追加

    if (!newsDetailData) {
        return <div className="max-w-4xl mx-auto p-6">Loading...</div>;
    }

    return (
        <>
            <HomeHeader/>
            <div className="max-w-4xl mx-auto px-4 py-30">
                {/* カテゴリタグ */}
                <span 
                  className={`
                    inline-flex items-center justify-center
                    px-4 py-2 mb-6
                    text-sm font-medium tracking-wide
                    rounded-full shadow-sm
                    transition-all duration-200
                    ${newsDetailData.category === 'Zevra' 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : newsDetailData.category === 'paca!' 
                        ? 'bg-orange-400 text-white hover:bg-orange-500'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }
                  `}
                >
                  {newsDetailData.category}
                </span>

                {/* タイトル */}
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                    {
                    newsDetailData.title
                } </h1>

                {/* メタ情報 */}
                <div className="flex items-center gap-4 text-gray-500 mb-8">
                    <span>{
                        newsDetailData.date
                    }</span>
                    {/* <span>•</span> */}
                    {/* <span>投稿者: {newsDetailData.author}</span> */} </div>

                {/* メイン画像 */}
                <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                    {/* <Image
            src={newsDetailData.image}
            alt={newsDetailData.title}
            fill
            className="object-cover"
            priority
          /> */} </div>

                {/* 本文 */}
                <div className="prose prose-lg max-w-none">
                    {
                    newsDetailData.content.split('\n').map((paragraph, i) => (
                        <p key={i}
                            className="mb-4 text-gray-700 leading-relaxed">
                            {
                            paragraph.trim()
                        } </p>
                    ))
                } </div>

                <Link href="/top" className="mt-12 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
                    ← トップに戻る
                </Link>
            </div>
            <HomeFooter/>
        </>
    );
}
