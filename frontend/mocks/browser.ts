// mocks/browser.ts
import { setupWorker } from 'msw/browser';  // 明示的にbrowserからインポート
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);