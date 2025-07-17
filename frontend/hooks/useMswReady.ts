"use client";
import { useState, useEffect } from 'react';

export const useMswReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeMocks = async () => {
      // if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        const { worker } = await import('../mocks/browser');
        await worker.start();
        console.log('✅ MSW started');
        setIsReady(true);
      // }
    };
    initializeMocks();
  }, []);

  return isReady;
}; 