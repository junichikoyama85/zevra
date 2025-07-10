'use client';
import { useCart } from '../../hooks/useCart';

interface Props {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export function AddToCartButton({ product }: Props) {
  const { addItem } = useCart();

  const handleClick = () => {
    console.log('Adding product:', product); // 追加確認
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
    >
      カートに追加
    </button>
  );
}