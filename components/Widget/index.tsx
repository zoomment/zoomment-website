'use client';
import { Skeleton, Flex } from 'antd';
import Zoomment from 'react-zoomment';

export const Widget = () => {
  return (
    <div style={{ marginTop: 40, width: '100%' }}>
      <Zoomment
        preloader={
          <>
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
          </>
        }
      />
    </div>
  );
};
