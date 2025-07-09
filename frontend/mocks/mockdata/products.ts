import { http, HttpResponse } from 'msw';

// 商品データのモック（さらに商品を追加）
export const products = [
  {
    id: 1,
    name: '商品A',
    price: 1000,
    image: '/products/productA.jpg',
    code: 'A001',
    description: '商品Aの説明です。高品質な素材を使用しています。',
    ingredients: '小麦粉、砂糖、卵、バター',
    content: '200g'
  },
  {
    id: 2,
    name: '商品B',
    price: 2000,
    image: '/products/productB.jpg',
    code: 'B002',
    description: '商品Bの説明です。人気の定番商品です。',
    ingredients: '米、塩、海苔',
    content: '10枚入り'
  },
  {
    id: 3,
    name: '商品C',
    price: 1500,
    image: '/products/productC.jpg',
    code: 'C003',
    description: '商品Cの説明です。お子様にもおすすめです。',
    ingredients: '牛乳、砂糖、ココアパウダー',
    content: '500ml'
  },
  {
    id: 4,
    name: '商品D',
    price: 2500,
    image: '/products/productD.jpg',
    code: 'D004',
    description: '商品Dの説明です。贈り物にも最適です。',
    ingredients: '大豆、食塩、調味料',
    content: '300g'
  },
  {
    id: 5,
    name: '商品E',
    price: 3000,
    image: '/products/productE.jpg',
    code: 'E005',
    description: '商品Eの説明です。季節限定の味わい。',
    ingredients: 'りんご、砂糖、シナモン',
    content: '2個入り'
  },
  {
    id: 6,
    name: '商品F',
    price: 1200,
    image: '/products/productF.jpg',
    code: 'F006',
    description: '商品Fの説明です。ヘルシー志向の方に。',
    ingredients: '玄米、雑穀、塩',
    content: '1袋（150g）'
  },
  {
    id: 7,
    name: '商品G',
    price: 1800,
    image: '/products/productG.jpg',
    code: 'G007',
    description: '商品Gの説明です。お茶うけにぴったり。',
    ingredients: '小豆、砂糖、寒天',
    content: '6個入り'
  },
  {
    id: 8,
    name: '商品H',
    price: 2200,
    image: '/products/productH.jpg',
    code: 'H008',
    description: '商品Hの説明です。香り豊かな逸品。',
    ingredients: '抹茶、砂糖、乳製品',
    content: '250g'
  },
  {
    id: 9,
    name: '商品I',
    price: 2700,
    image: '/products/productI.jpg',
    code: 'I009',
    description: '商品Iの説明です。伝統の味をお楽しみください。',
    ingredients: 'もち米、きな粉、黒蜜',
    content: '8個入り'
  },
  {
    id: 10,
    name: '商品J',
    price: 3500,
    image: '/products/productJ.jpg',
    code: 'J010',
    description: '商品Jの説明です。特別な日のご褒美に。',
    ingredients: 'チョコレート、ナッツ、クリーム',
    content: '1箱（12個）'
  },
];

// 商品一覧取得API
export const productsHandler = http.get('/api/products', () => {
  return HttpResponse.json(products);
});

// 商品詳細取得API
export const productDetailHandler = http.get('/api/products/:id', ({ params }) => {
  const product = products.find(p => p.id === Number(params.id));
  return product 
    ? HttpResponse.json(product)
    : HttpResponse.json({ error: '商品が見つかりません' }, { status: 404 });
});

// 商品検索API
export const productSearchHandler = http.get('/api/products/search', ({ request }) => {
  const url = new URL(request.url);
  const keyword = url.searchParams.get('keyword');
  const filteredProducts = keyword
    ? products.filter(p => p.name.includes(keyword))
    : products;
  return HttpResponse.json(filteredProducts);
});