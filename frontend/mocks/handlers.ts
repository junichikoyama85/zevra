// mocks/handlers.ts
import { http, HttpResponse } from 'msw';
import { productsHandler, productDetailHandler } from './mockdata/products';
import { authLoginHandler } from './mockdata/auth';
import { newsHandler, newsDetailHandler } from './mockdata/news';

export const handlers = [
    productsHandler,
    productDetailHandler,
    authLoginHandler,
    newsHandler,
    newsDetailHandler
];