import { Basket } from '@/components';
import { BsGithub } from 'react-icons/bs';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className="container_preview">
      <div className={styles.header_wrapper}>
        <Basket />

        <div>
          <a
            href="https://github.com/CyberRock66/foody"
            target="_blank"
            className="flex items-center ml-64"
            rel="noopener noreferrer"
          >
            <span className="mr-2 font-semibold underline">Github</span>
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  </header>
);
