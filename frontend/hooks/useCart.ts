'use client';
import { useState, useEffect, useMemo } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // ローカルストレージから読み込み
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // ローカルストレージに保存
  useEffect(() => {
    if (isMounted) { // マウント後にのみ保存
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('Saved to localStorage:', cartItems); // デバッグ用
    }
  }, [cartItems, isMounted]);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    console.log('add');
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const totalItems = useMemo(() => (
    cartItems.reduce((sum, item) => sum + item.quantity, 0)
  ), [cartItems]); // cartItemsが変更されるたびに再計算

  return {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    totalPrice,
    totalItems,
  };
}