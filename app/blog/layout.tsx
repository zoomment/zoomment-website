'use client';
import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        width: '100%',
      }}
    >
      <div style={{ padding: '40px 20px' }}>{children}</div>
    </Content>
  );
};

export default BlogLayout;
