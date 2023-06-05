/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import Image from 'next/image';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import { sidebarData } from './Sidebar.data';
import Logo from './df-logo.jpg';

export const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = usePathname();
  return (
    <aside className={styles.sidebar}>
      <nav>
        <Link href="/" className={styles.sidebar_logo}>
          <Image src={Logo} alt="logo" width={120} height={120} priority />
        </Link>
        <ul className={styles.sidebar_list}>
          {sidebarData.map((item) => (
            <li key={`/${item.id}`}>
              <Link
                href={item.route}
                className={
                  pathname === `${item.route}` ? `${styles.active} ` : ''
                }
              >
                <div className={styles.sidebar_list__box}>
                  <div>{item.icon}</div>
                  <div className={styles.sidebar_list__box}>
                    <span>{item.title}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
