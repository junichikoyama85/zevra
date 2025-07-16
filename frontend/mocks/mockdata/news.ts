import { http, HttpResponse } from 'msw';


export const news = [
  {
    id: 1,
    date: '2025.6.12',
    title: 'ダミーダミー株式会社Zevra / Zevra, Inc.を設立しました。',
    category: 'Zevra',
    content: 'テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1テスト1'
  },
  {
    id: 2,
    date: '2025.3.2',
    title: 'ダミーダミーブログを更新しました。',
    category: 'paca!',
    content: 'テスト2テスト2テスト2テスト2テスト2テスト2テスト2テスト2テスト2'
  },
  {
    id: 3,
    date: '2025.3.1',
    title: 'ダミーダミーブログを更新しました。',
    category: 'Zevra',
    content: "テスト3テスト3テスト3テスト3テスト3テスト3テスト3テスト3テスト3テスト3テスト3テスト3テスト3テスト3テスト3"
  },
  {
    id: 4,
    date: '2025.9.1',
    title: 'ダミーダミー新商品追加のお知らせ',
    category: 'paca!',
    content: "テスト4テスト4テスト4テスト4テスト4テスト4テストテスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4テスト4"
  },
  {
    id: 5,
    date: '2023.3.1',
    title: 'ダミーダミーブログを更新しました。ダミーダミーブログを更新しました。ダミーダミーブログを更新しました。ダミーダミーブログを更新しました。',
    category: 'paca!',
    content: "テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5テスト5"
  },
 
 
];

// 商品一覧取得API
export const newsHandler = http.get('/api/news', () => {
  return HttpResponse.json(news);
});

export const newsDetailHandler = http.get('/api/news/:id', ({ params }) => {
    const newsData = news.find(p => p.id === Number(params.id));
    return newsData 
      ? HttpResponse.json(newsData)
      : HttpResponse.json({ error: '商品が見つかりません' }, { status: 404 });
  });
  