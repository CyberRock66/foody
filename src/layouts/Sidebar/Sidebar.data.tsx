import { FaHamburger } from 'react-icons/fa';
import { GiFullPizza } from 'react-icons/gi';
import { BiSushi } from 'react-icons/bi';

export const sidebarData = [
  {
    id: 1,
    title: 'Pizzas',
    icon: <GiFullPizza />,
    route: '/pizzas',
  },
  { id: 2, title: 'Burgers', icon: <FaHamburger />, route: '/burgers' },
  { id: 3, title: 'Sushi', icon: <BiSushi />, route: '/sushi' },
];
