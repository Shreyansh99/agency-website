import { metadata } from './metadata';
import ClientLayout from './client-layout';
import type { ReactNode } from 'react';

export { metadata };

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <ClientLayout>{children}</ClientLayout>;
}
