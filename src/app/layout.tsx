import { LayoutBase } from '@/layouts/LayoutBase/LayoutBaset';
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Foody Moody',
  description: 'pizzzaass',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <LayoutBase>{children}</LayoutBase>
    </body>
  </html>
);

export default RootLayout;
