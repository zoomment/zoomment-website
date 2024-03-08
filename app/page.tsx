'use client';
import { useEffect, useLayoutEffect } from 'react';
import Example from '@/components/Example';
import Title from 'antd/es/typography/Title';
import { Tag, Skeleton, Flex } from 'antd';
import Script from 'next/script';

export default function Home() {
  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.zoomment.com/zoomment.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <main className="max-w-screen-sm py-12 px-4 mx-auto">
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
          Zoomment <Tag color="purple">Beta</Tag>
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
        style={{ marginTop: 30 }}
        id="zoomment"
        className="w-full"
        data-theme="light"
        data-language="en"
        data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
      >
        <div>
          <Flex
            gap={8}
            align="center"
            justify="center"
            style={{ paddingTop: 10 }}
          >
            <Skeleton.Button active />
            <Skeleton.Button active />
            <Skeleton.Button active />
            <Skeleton.Button active />
            <Skeleton.Button active />
          </Flex>
          <Skeleton.Input
            block
            style={{ height: 100, marginTop: 25, marginBottom: 25 }}
            active
          />
        </div>
      </div>
    </main>
  );
}
