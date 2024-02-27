import Builder from '@/components/Builder';
import { Metadata } from 'next';
import Title from 'antd/es/typography/Title';
import { Flex } from 'antd';

// either Static metadata
export const metadata: Metadata = {
  title: 'Zoomment: Empower Your Website with Open Source Commenting Widget',
  description:
    'Enhance engagement on your Static Site Generated (SSG) website effortlessly with Zoomment, an open-source commenting widget. Easily embed Zoomment to receive and manage comments, fostering community interaction seamlessly.',
};

export default function Home() {
  return (
    <main className="max-w-screen-sm py-10 mx-auto">
      <Flex justify="center" className="mb-5">
        <Title level={3}>Add Comments to Your Website</Title>
      </Flex>
      <Builder />
    </main>
  );
}
