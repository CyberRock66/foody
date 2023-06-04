import { Basket } from '@/components';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className="container_preview">
      <div className={styles.header_wrapper}>
        <Basket />
      </div>
    </div>
  </header>
);
