import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* フッター上部（リンクとSNS） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zevra</h3>
            <p className="text-gray-400">
              お客様に最高のショッピング体験を提供します。
            </p>
          </div>

          {/* ナビゲーションリンク */}
          <div>
            <h4 className="text-lg font-semibold mb-4">メニュー</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  商品一覧
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SNSでフォロー</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* フッター下部（著作権） */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zevra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 