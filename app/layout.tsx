import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, Layout } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Roboto } from 'next/font/google';
import 'normalize.css';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});

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
      <body className={roboto.className}>
        <AntdRegistry>
          <ConfigProvider>
            <Header />
            <Layout style={{ minHeight: '100vh' }}>{children}</Layout>
            <Footer />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
