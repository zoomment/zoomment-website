'use client';
import { useLayoutEffect } from 'react';
import { Skeleton, Flex } from 'antd';

export const Widget = () => {
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
  );
};
