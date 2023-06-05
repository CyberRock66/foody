'use client';

import { useCartStore } from '@/store/useCart';
import { OrdersTemplate } from '@/templates/OrdersTemplate/OrdersTemplate';
import { useState } from 'react';
import { BsBasketFill } from 'react-icons/bs';

export const Basket = () => {
  const cartTotal = useCartStore((state) => state.totalItems);
  const [open, setOpen] = useState(false);

  return (
    <button type="button" onClick={() => setOpen(true)}>
      <BsBasketFill />
      <div>{cartTotal}</div>
      <OrdersTemplate open={open} setOpen={setOpen} />
    </button>
  );
};
