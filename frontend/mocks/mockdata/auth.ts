import { http, HttpResponse } from 'msw';

interface LoginRequest {
  email: string;
  password: string;
}

// 商品一覧取得API
export const authLoginHandler = http.post('/api/auth/login', async ({ request }) => {
  const { email, password } = (await request.json()) as LoginRequest; // 型アサーション
  
  if (email === 'user@example.com' && password === 'password123') {
    return HttpResponse.json({ 
      user: { id: 1, name: 'Test User' },
      token: 'mock-jwt-token'
    });
  }
  
  return HttpResponse.json(
    { message: 'メールアドレスまたはパスワードが違います' },
    { status: 401 }
  );
});

