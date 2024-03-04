'use client';
import React from 'react';
import { Form, Input, Button } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import Example from '@/components/Example';

const Add: React.FC = () => {
  return (
    <>
      <Title level={2} style={{ marginBottom: 10 }}>
        Step 1. Setup Widget
      </Title>
      <Paragraph style={{ marginBottom: 20 }}>
        Add the &quot;data-token&quot; attribute to your existing widget or
        insert the provided code where you want to receive comments.
      </Paragraph>
      <Example lng="en" theme="light" token="32rf3f4&66t" />
      <Title level={2} style={{ marginTop: 20, marginBottom: 10 }}>
        Step 2. Verify Ownership
      </Title>
      <Paragraph style={{ marginBottom: 20 }}>
        Enter the full URL where you&apos;ve inserted the widget.
      </Paragraph>
      <Form size="large">
        <Form.Item
          style={{ marginBottom: 30 }}
          name={'pageUrl'}
          rules={[
            { required: true, message: 'URL is required!' },
            { type: 'url', message: 'URL is not a valid!' },
          ]}
        >
          <Input placeholder="https://zoomment.com/blogs/random-article" />
        </Form.Item>
        <Button loading={false} type="primary" htmlType="submit">
          Verify
        </Button>
      </Form>
    </>
  );
};

export default Add;
