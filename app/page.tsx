'use client';
import { useLayoutEffect } from 'react';
import Example from '@/components/Example';
import Title from 'antd/es/typography/Title';
import { Tag, Flex } from 'antd';
import { Widget } from '@/components/Widget';

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
    <main
      style={{
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        padding: '50px 4px',
      }}
    >
      <Flex vertical align="center" justify="center">
        <Title
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: '8px',
            paddingLeft: 50,
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
            margin: '10px 5px 15px 5px',
          }}
        >
          Add Comments to Your Website
        </Title>
      </Flex>
      <Example lng="en" theme="light" />
      <Widget />
    </main>
  );
}
