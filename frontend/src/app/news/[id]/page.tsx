'use client'
import Link from 'next/link';
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import { useMswReady } from '../../../../hooks/useMswReady';
import { use, useEffect, useState } from 'react';
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

// カテゴリごとのスタイルを定義
const getCategoryStyle = (category: string) => {
    switch (category) {
        case 'Zevra':
            return 'bg-black text-white hover:bg-gray-800';
        case 'paca!':
            return 'bg-orange-400 text-white hover:bg-orange-500';
        default:
            return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
};

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [newsDetailData, setNewsDetailData] = useState<NewsItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const isMswReady = useMswReady();

    useEffect(() => {
        if (!isMswReady || !id) return;

        const fetchNewsDetail = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/news/${id}`);
                if (!response.ok) throw new Error('ニュースの取得に失敗しました');
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
        <div className=''>
            <HomeHeader />
            <div className="max-w-4xl mx-auto px-4 py-30">
                      {/* タイトル */}
                      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-['Poppins-Bold']">
                    {newsDetailData.title}
                </h1>

                                {/* 本文 */}
                                <div className="prose prose-lg max-w-none mb-12">
                    {newsDetailData.content.split('\n').map((paragraph, i) => (
                        <p key={i} className="mb-6 text-gray-700 leading-relaxed">
                            {paragraph.trim()}
                        </p>
                    ))}
                </div>

                {/* メタ情報 */}
                <div className="flex items-center gap-4 text-gray-500 mb-8">
                    <span>{newsDetailData.date}</span>
                    <span>INFOMATION</span>
                </div>

                                {/* カテゴリタグ */}
                                <span
                    className={`inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium tracking-wide rounded-full shadow-sm transition-all duration-200 ${getCategoryStyle(newsDetailData.category)}`}
                >
                    {newsDetailData.category}
                </span>

                {/* メイン画像 */}
                <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={'/images/img/alesia-kazantceva-VWcPlbHglYc-unsplash.jpg'}
                        alt={newsDetailData.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                    
                </div>

                <div className="relative w-full py-25">
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
        </div>
    );
}
