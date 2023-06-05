'use client';

import { useCartStore } from '@/store/useCart';
import { BsBasketFill } from 'react-icons/bs';

export const Basket = () => {
  const cartTotal = useCartStore((state) => state.totalItems);
  return (
    <div>
      <BsBasketFill />
      <div>{cartTotal}</div>
    </div>
  );
};
