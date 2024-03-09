'use client';
import { Avatar, Dropdown, Flex, Skeleton, Button } from 'antd';
import Text from 'antd/es/typography/Text';
import { useRouter } from 'next/navigation';
import {
  UserOutlined,
  CaretDownOutlined,
  LoginOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { useProfile } from '@/utils';

export default function Profile() {
  const router = useRouter();
  const { profile, loading, logout } = useProfile();
  const username = profile && profile.email.replace(/@.*/g, '');

  return (
    <div style={{ maxWidth: 300 }}>
      {loading && (
        <Flex style={{ width: 200 }} justify="end" gap={8}>
          <Skeleton.Button active style={{ width: 100 }} />
        </Flex>
      )}
      {!loading && profile && (
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
              src={`https://www.gravatar.com/avatar/${profile?.gravatar}?d=monsterid`}
            />
            <Text ellipsis>{username}</Text>
            <CaretDownOutlined />
          </Flex>
        </Dropdown>
      )}
      {!loading && !profile && (
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
