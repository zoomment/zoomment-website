'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Layout, Input, Form, theme } from 'antd';
import Title from 'antd/es/typography/Title';
import { request } from '@/utils';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onFinish = async (values: any) => {
    setLoading(true);
    await request({
      path: '/users/auth',
      method: 'POST',
      data: values,
    });

    setEmail(values.email);
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          padding: '50px',
          minHeight: 360,
          maxWidth: 550,
          width: '100%',
          marginBottom: 100,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {submitted ? (
          <>
            <Title>Check your inbox. </Title>
            <p style={{ marginBottom: 30 }}>
              Click the link we sent to {email} to sign in.
            </p>
            <Button
              size="large"
              type="primary"
              onClick={() => router.push('/')}
            >
              Back to Home
            </Button>
          </>
        ) : (
          <>
            <Title>Sign in with email</Title>
            <p style={{ marginBottom: 30 }}>
              Enter the email address and we’ll send a magic link to your inbox.
            </p>
            <Form size="large" onFinish={onFinish}>
              <Form.Item
                style={{ marginBottom: 40 }}
                name={'email'}
                rules={[
                  { required: true, message: 'Email is required!' },
                  { type: 'email', message: 'Email is not a valid!' },
                ]}
              >
                <Input placeholder="Your email" />
              </Form.Item>
              <Button loading={loading} type="primary" htmlType="submit">
                Continue
              </Button>
            </Form>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Auth;
