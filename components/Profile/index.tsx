'use client';
import { Avatar, Dropdown, Flex, Skeleton, Button } from 'antd';
import Text from 'antd/es/typography/Text';
import { useRouter } from 'next/navigation';
import {
  UserOutlined,
  CaretDownOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { useAuth } from '@/contexts/AuthContext';

export default function Profile() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const emailName = user && user.email.replace(/@.*/g, '');

  return (
    <div style={{ maxWidth: 300 }}>
      {loading && (
        <Flex style={{ width: 200 }} justify="end" gap={8}>
          <Skeleton.Button active style={{ width: 100 }} />
        </Flex>
      )}
      {!loading && user && (
        <Dropdown
          trigger={['click']}
          menu={{
            items: [
              {
                key: '1',
                onClick: () => router.push('/dashboard'),
                label: 'Dashboard',
              },
              {
                key: '2',
                onClick: () => router.push('/donate'),
                label: 'Donate',
              },
              {
                key: '3',
                onClick: () => router.push('/dashboard/account'),
                label: 'Account Settings',
              },
              {
                key: '4',
                danger: true,
                onClick: () => {
                  logout();
                  router.push('/');
                },
                label: 'Logout',
              },
            ],
          }}
        >
          <Flex gap={8} style={{ cursor: 'pointer' }} align="center">
            <Avatar
              style={{ flexShrink: 0 }}
              size={28}
              icon={<UserOutlined />}
              src={`https://www.gravatar.com/avatar/${user?.gravatar}?d=monsterid`}
            />
            <Text ellipsis>{user.name || emailName}</Text>
            <CaretDownOutlined />
          </Flex>
        </Dropdown>
      )}
      {!loading && !user && (
        <Flex gap={8}>
          <Button
            onClick={() => router.push('/auth')}
            icon={<LoginOutlined />}
            type="primary"
          >
            Login
          </Button>
        </Flex>
      )}
    </div>
  );
}
