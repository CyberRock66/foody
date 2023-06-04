import { FaHamburger } from 'react-icons/fa';
import { GiFullPizza } from 'react-icons/gi';

export const sidebarData = [
  {
    id: 1,
    title: 'Pizzas',
    icon: <GiFullPizza />,
    route: '/pizzas',
  },
  { id: 2, title: 'burgers', icon: <FaHamburger />, route: '/burgers' },
];
