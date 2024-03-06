'use client';
import { Avatar, Dropdown, Flex, Skeleton, Button } from 'antd';
import Text from 'antd/es/typography/Text';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import {
  UserOutlined,
  CaretDownOutlined,
  PullRequestOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { useProfile } from '@/utils';

export default function Profile() {
  const { profile, loading } = useProfile();
  const router = useRouter();

  const onLogout = () => {
    setCookie('token', '');
    router.refresh();
  };

  const username = profile && profile.email.replace(/@.*/g, '');

  return (
    <div style={{ maxWidth: 300 }}>
      {loading && (
        <Flex style={{ width: 200 }} justify="end" gap={8}>
          <Skeleton.Button active />
          <Skeleton.Button active />
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
                onClick: onLogout,
                label: 'Logout',
              },
            ],
          }}
        >
          <Flex gap={8} style={{ cursor: 'pointer' }} align="center">
            <Avatar
              className="flex-shrink-0"
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
            href="https://github.com/zoomment"
            target="_blank"
            icon={<GithubOutlined />}
          >
            GitHub
          </Button>
          <Button
            onClick={() => router.push('/auth')}
            icon={<PullRequestOutlined />}
            type="primary"
          >
            Login
          </Button>
        </Flex>
      )}
    </div>
  );
}
