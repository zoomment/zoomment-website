import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zoomment: Empower Your Website with Open Source Commenting Widget',
  description:
    'Enhance engagement on your Static Site Generated (SSG) website effortlessly with Zoomment, an open-source commenting widget. Easily embed Zoomment to receive and manage comments, fostering community interaction seamlessly.',
  other: {
    zoomment: '65e5027029aeb252fcaae656',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <AntdRegistry>
          <Header />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
