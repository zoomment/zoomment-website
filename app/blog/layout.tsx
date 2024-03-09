'use client';
import React from 'react';
import { Layout, theme } from 'antd';
import Link from 'next/link';

const { Content, Footer } = Layout;

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          margin: '0 auto',
          maxWidth: 1000,
          width: '100%',
        }}
      >
        <div style={{ padding: '40px 20px' }}>{children}</div>
      </Content>
    </Layout>
  );
};

export default BlogLayout;
