'use client';

import { useCartStore } from '@/store/useCart';
import { OrdersTemplate } from '@/templates/OrdersTemplate/OrdersTemplate';
import { useEffect, useState } from 'react';
import { BsBasketFill } from 'react-icons/bs';

export const Basket = () => {
  const cartTotal = useCartStore((state) => state.totalItems);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTotal(cartTotal);
  }, [cartTotal]);

  return (
    <button type="button" onClick={() => setOpen(true)}>
      <BsBasketFill />
      {total === 0 ? null : <div>{cartTotal}</div>}

      <OrdersTemplate open={open} setOpen={setOpen} />
    </button>
  );
};
