'use client';
import React from 'react';

import { Breadcrumb, Layout, theme, Flex } from 'antd';
import Link from 'next/link';
import Profile from '@/components/Profile';

const { Content, Footer } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG, boxShadowTertiary },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Flex
        align="center"
        justify="space-between"
        style={{
          padding: '20px',
          height: 50,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: colorBgContainer,
          boxShadow: boxShadowTertiary,
        }}
      >
        <div></div>
        <div>
          <Profile />
        </div>
      </Flex>
      <Content
        style={{
          margin: '0 auto',
          padding: '0 20px',
          maxWidth: 1000,
          width: '100%',
        }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link href="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'calc(100vh - 250px)',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  );
};

export default DashboardLayout;
