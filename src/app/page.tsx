import Image from 'next/image';
import Bg from '@/assets/images/aloha.jpg';

const Home = () => (
  <section className="w-full h-full">
    <h1 className="text-3xl font-bold underline">
      <Image src={Bg} alt="bg" layout="fill" className="object-contain" />
    </h1>
  </section>
);

export default Home;
