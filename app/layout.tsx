import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Component Testing Environment',
};

type RootLayoutProps = { children: ReactNode };

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
