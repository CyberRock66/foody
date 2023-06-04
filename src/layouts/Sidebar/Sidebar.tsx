/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

import Link from 'next/link';

import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import { sidebarData } from './Sidebar.data';

export const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = usePathname();
  return (
    <aside className={styles.sidebar}>
      <nav>
        <div className={styles.sidebar_logo} />
        <ul className={styles.sidebar_list}>
          {sidebarData.map((item) => (
            <li key={item.id}>
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
