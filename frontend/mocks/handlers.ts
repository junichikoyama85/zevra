// mocks/handlers.ts
import { http, HttpResponse } from 'msw';
import { productsHandler, productDetailHandler } from './mockdata/products';
import { authLoginHandler } from './mockdata/auth';

export const handlers = [
    productsHandler,
    productDetailHandler,
    authLoginHandler
];