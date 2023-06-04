import { Card } from '@/components/Card/Card';
import { supabase } from '@/lib/supabase';
import { IProduct } from '@/types/models/product.model';

const BurgersPage = async () => {
  const { data } = await supabase
    .from('product')
    .select()
    .eq('category', 'burgers')
    .returns<IProduct[]>();

  return (
    <section className="mx-auto max-w-full px-4 py-6 sm:px-8 sm:py-16 lg:max-w-full lg:px-">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data?.map((product: IProduct) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default BurgersPage;
