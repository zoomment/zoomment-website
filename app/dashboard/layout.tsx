'use client';
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Link from 'next/link';

const { Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        width: '100%',
      }}
    >
      <div style={{ padding: '0 20px', width: '100%' }}>
        <Breadcrumb
          items={[
            {
              key: '1',
              title: <Link href="/dashboard">Dashboard</Link>,
            },
          ]}
          style={{ margin: '16px 0' }}
        ></Breadcrumb>
        <div
          style={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'calc(100vh - 250px)',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </div>
    </Content>
  );
};

export default DashboardLayout;
