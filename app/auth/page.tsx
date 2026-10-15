'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Form } from 'antd';
import { request } from '@/utils/request-client';
import styles from './auth.module.css';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <div className={`container ${styles.wrap}`}>
      <div className={`panel panel--plain ${submitted ? 'panel--yellow' : ''} ${styles.card}`}>
        {submitted ? (
          <>
            <h1 className="display display--lg">Check your inbox</h1>
            <p className={styles.lead}>
              Click the link we sent to <strong>{email}</strong> to sign in.
            </p>
            <Link href="/" className="btn-pop btn-pop--ghost">
              Back to Home
            </Link>
          </>
        ) : (
          <>
            <h1 className="display display--lg">Sign in with email</h1>
            <p className={styles.lead}>
              Enter the email address and we’ll send a magic link to your
              inbox. No password needed.
            </p>
            <Form size="large" onFinish={onFinish} layout="vertical" requiredMark={false}>
              <Form.Item
                label="Email"
                name={'email'}
                rules={[
                  { required: true, message: 'Enter your email address.' },
                  { type: 'email', message: 'That doesn’t look like an email address.' },
                ]}
              >
                <Input placeholder="you@yourblog.dev" autoComplete="email" />
              </Form.Item>
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                className={styles.submit}
              >
                Send magic link
              </Button>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
