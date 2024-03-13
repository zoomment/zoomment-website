'use client';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { Form, Input, Button, Skeleton, Flex, Alert } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import Example from '@/components/Example';
import CodeBox from '@/components/CodeBox';
import { useAuth } from '@/contexts/AuthContext';
import { request } from '@/utils/request-client';

const Add: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await request({
        method: 'POST',
        path: '/sites',
        data: {
          url: values.url,
        },
      });
      router.push('/dashboard');
    } catch (e: any) {
      setError(e.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <Title level={4} style={{ marginBottom: 5 }}>
        Step 1. Insert Code
      </Title>
      <Paragraph style={{ marginBottom: 20 }}>
        Copy and paste the widget code into your website where you want to spark
        conversations.
      </Paragraph>
      <Example lng="en" theme="light" />
      <Title level={4} style={{ marginTop: 20, marginBottom: 5 }}>
        Step 2. Verify Ownership
      </Title>
      <Paragraph style={{ marginBottom: 20 }}>
        Strengthen your website&apos;s identity by adding a unique meta tag just
        before the {`</head>`} tag in your HTML.
      </Paragraph>
      {user ? (
        <CodeBox>{`<meta name="zoomment" content="${user.id}" />`}</CodeBox>
      ) : (
        <Skeleton active title={{ style: { height: 46 } }} paragraph={false} />
      )}
      <Title level={4} style={{ marginTop: 20, marginBottom: 5 }}>
        Step 3. Finalize Setup
      </Title>
      <Paragraph style={{ marginBottom: 20 }}>
        Enter your website URL and click &quot;Verify&quot; to complete the
        setup.
      </Paragraph>
      <Form size="large" onFinish={onFinish}>
        <Form.Item
          style={{ marginBottom: 30 }}
          name="url"
          rules={[
            { required: true, message: 'URL is required!' },
            { type: 'url', message: 'URL is not a valid!' },
          ]}
        >
          <Input placeholder="https://example.com" />
        </Form.Item>
        {error && (
          <Alert
            style={{ marginBottom: 30 }}
            message={error}
            closable
            type="error"
            showIcon
          />
        )}
        <Flex gap={8}>
          <Button
            type="default"
            onClick={() => router.push('/dashboard')}
            htmlType="button"
          >
            Back
          </Button>
          <Button loading={loading} type="primary" htmlType="submit">
            Verify
          </Button>
        </Flex>
      </Form>
    </div>
  );
};

export default Add;
