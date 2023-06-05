'use client';

import { useCartStore } from '@/store/useCart';
import { OrdersTemplate } from '@/templates';
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
    <button
      className="flex gap-3 items-center"
      type="button"
      onClick={() => setOpen(true)}
    >
      <BsBasketFill />
      {total === 0 ? null : (
        <div className="bg-red-500 text-cyan-50 p-1 w-6 h-6 flex items-center justify-center rounded-full">
          {cartTotal}
        </div>
      )}

      <OrdersTemplate open={open} setOpen={setOpen} />
    </button>
  );
};
