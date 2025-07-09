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

  return (
    <button
      onClick={() => addItem(product)}
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
    >
      カートに追加
    </button>
  );
}