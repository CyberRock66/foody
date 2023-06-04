import { PropsWithChildren } from 'react';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './LayoutBase.module.scss';

export const LayoutBase: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.layout_cabinet}>
    <Header />
    <Sidebar />
    <main className={styles.body}>
      <div className={styles.content}>{children}</div>
    </main>
  </div>
);
