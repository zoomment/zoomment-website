import Example from '@/components/Example';
import { Metadata } from 'next';
import Script from 'next/script';
import Title from 'antd/es/typography/Title';
import { Tag } from 'antd';

// either Static metadata
export const metadata: Metadata = {
  title: 'Zoomment: Empower Your Website with Open Source Commenting Widget',
  description:
    'Enhance engagement on your Static Site Generated (SSG) website effortlessly with Zoomment, an open-source commenting widget. Easily embed Zoomment to receive and manage comments, fostering community interaction seamlessly.',
};

export default function Home() {
  return (
    <main className="max-w-screen-sm py-12 mx-auto">
      <div className="mb-5 flex flex-col justify-center items-center">
        <Title
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: '8px',
            margin: 0,
          }}
          level={1}
        >
          Zoomment <Tag color="purple">Alpha</Tag>
        </Title>
        <Title
          type="secondary"
          level={5}
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: '8px',
            margin: '10px 5px',
          }}
        >
          Add Comments to Your Website
        </Title>
      </div>
      <Example lng="en" theme="light" />
      <div
        style={{ marginTop: 20 }}
        id="zoomment"
        className="w-full"
        data-theme="light"
        data-language="en"
        data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
      ></div>
      <Script src="https://cdn.zoomment.com/zoomment.min.js"></Script>
    </main>
  );
}
