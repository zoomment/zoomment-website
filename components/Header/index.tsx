'use client';
import React from 'react';

import { theme, Flex } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import Profile from '@/components/Profile';

const Header = () => {
  const {
    token: { colorBgContainer, boxShadowTertiary },
  } = theme.useToken();

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        height: 50,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: colorBgContainer,
        boxShadow: boxShadowTertiary,
      }}
    >
      <Flex
        style={{ maxWidth: 1000, width: '100%', padding: '0 20px' }}
        align="center"
        justify="space-between"
      >
        <div>
          <Link href="/">
            <Image
              priority
              alt="zoomment.com"
              width={35}
              height={30}
              src="/logo.svg"
            />
          </Link>
        </div>
        <div>
          <Profile />
        </div>
      </Flex>
    </Flex>
  );
};

export default Header;
