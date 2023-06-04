import { Card } from '@/components/Card/Card';
import { supabase } from '@/lib/supabase';
import { IProduct } from '@/types/models/product.model';

const PizzasPage = async () => {
  const { data } = await supabase
    .from('product')
    .select()
    .eq('category', 'pizzas');

  console.log('data', data);

  return (
    <div>
      <div>pizza</div>
      {data?.map((product: IProduct) => (
        <Card key={product.id} title={product.title} image={product.image} />
      ))}
    </div>
  );
};

export default PizzasPage;
