import { IProduct } from '@/types/models/product.model';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  cart: IProduct[];
  totalItems: number;
  totalPrice: number;

  addToCart: (Item: IProduct) => void;
  removeFromCart: (Item: IProduct) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
      addToCart: (product: IProduct) => {
        const { cart } = get();
        const cartItem = cart.find((item) => item.id === product.id);

        // If the item already exists in the Cart, increase its quantity
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity as number) + 1 }
              : item,
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: 1 }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },
      removeFromCart: (product: IProduct) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.price,
        }));
      },
    }),
    {
      name: 'cart',
    },
  ),
);
