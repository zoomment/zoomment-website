'use client';
import React from 'react';

import { Breadcrumb, Layout, theme, Flex } from 'antd';
import Link from 'next/link';
import Profile from '@/components/Profile';

const { Content, Footer } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Flex
        align="center"
        justify="space-between"
        style={{
          padding: '20px',
          height: 50,
          background: colorBgContainer,
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
          maxWidth: 800,
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
            padding: 24,
            minHeight: 360,
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
