'use client';

import { Skeleton, Flex } from 'antd';
import { useEffect } from 'react';

export const Widget = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.zoomment.com/zoomment.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ marginTop: 40, width: '100%' }}>
      <div
        id="zoomment"
        data-theme="light"
        data-language="en"
        data-gravatar="monsterid"
        data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
        data-visitors="true"
      >
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

