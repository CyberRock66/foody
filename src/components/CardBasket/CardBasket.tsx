import { useCartStore } from '@/store/useCart';
import { IProduct } from '@/types/models/product.model';
import Image from 'next/image';
import { convertToCurrency, optionsCurrencyUSD } from '@/utils/common.util';

export const CardBasket: React.FC<IProduct> = ({ ...product }) => {
  const removeProducts = useCartStore((state) => state.removeFromCart);

  return (
    <li key={product.id} className="flex py-6">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.title}>{product.title}</a>
            </h3>
            <p className="ml-4">
              {convertToCurrency(optionsCurrencyUSD, product.price)}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.quantity}</p>

          <div className="flex">
            <button
              type="button"
              onClick={() => removeProducts(product)}
              className="font-medium text-orange-600 hover:text-orange-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
