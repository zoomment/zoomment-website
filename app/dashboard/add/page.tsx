'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Skeleton } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import Example from '@/components/Example';
import CodeBox from '@/components/CodeBox';
import { useProfile, request } from '@/utils';

const Add: React.FC = () => {
  const profile = useProfile();
  const router = useRouter();

  const onFinish = async (values: any) => {
    await request({
      method: 'POST',
      path: '/sites',
      data: {
        url: values.url,
      },
    });

    router.push('/dashboard');
  };

  return (
    <>
      <Title level={2} style={{ marginBottom: 10 }}>
        Step 1. Insert Code
      </Title>
      <Paragraph style={{ marginBottom: 20 }}>
        Copy and paste the widget code into your website where you want to spark
        conversations.
      </Paragraph>
      <Example lng="en" theme="light" />
      <Title level={2} style={{ marginTop: 20, marginBottom: 10 }}>
        Step 2. Verify Ownership
      </Title>
      <Paragraph style={{ marginBottom: 20 }}>
        Strengthen your website&apos;s identity by adding a unique meta tag just
        before the {`</head>`} tag in your HTML.
      </Paragraph>
      {profile ? (
        <CodeBox>{`<meta name="zoomment" content="${profile.id}" />`}</CodeBox>
      ) : (
        <Skeleton active title={{ style: { height: 52 } }} paragraph={false} />
      )}
      <Title level={2} style={{ marginTop: 20, marginBottom: 10 }}>
        Step 3. Finalize Setup
      </Title>
      <Paragraph style={{ marginBottom: 20 }}>
        Enter your website URL and click &quot;Verify&quot; to complete the
        setup. Confirm ownership and unlock the full potential of managing
        comments on your site.
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
        <Button loading={false} type="primary" htmlType="submit">
          Verify
        </Button>
      </Form>
    </>
  );
};

export default Add;
