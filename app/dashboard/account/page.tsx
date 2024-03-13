'use client';
import React, { useState } from 'react';
import { Button, Popconfirm } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { request } from '@/utils/request-client';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const Account: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();

  const onDeleteAccount = async () => {
    setLoading(true);

    await request({
      path: '/users',
      method: 'DELETE',
    });

    logout();
    router.push('/');
    setLoading(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <Title level={4}>Account settings</Title>
      <Paragraph style={{ maxWidth: 500 }}>
        Deleting your account will permanently erase all data. If you have
        issues we can address, please reach out first.
      </Paragraph>
      <Popconfirm
        placement="bottomLeft"
        title="Delete account"
        okText="Yes"
        okButtonProps={{
          danger: true,
        }}
        onConfirm={onDeleteAccount}
        cancelText="Cancel"
        description="Are you sure you want to delete your account?"
      >
        <Button loading={loading} danger>
          Delete Account
        </Button>
      </Popconfirm>
    </div>
  );
};

export default Account;
