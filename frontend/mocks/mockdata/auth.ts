

  import { http, HttpResponse } from 'msw';


// 商品一覧取得API
export const authLoginHandler = http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json();
    
    // モック認証
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
  })

