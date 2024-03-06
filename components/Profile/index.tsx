'use client';
import { Avatar, Dropdown, Flex, Skeleton } from 'antd';
import Text from 'antd/es/typography/Text';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { UserOutlined } from '@ant-design/icons';
import { useProfile } from '@/utils';

export default function Profile() {
  const profile = useProfile();
  const router = useRouter();

  const onLogout = () => {
    setCookie('token', '');
    router.refresh();
  };

  return (
    <div style={{ maxWidth: 200 }}>
      {profile ? (
        <Dropdown
          trigger={['click']}
          menu={{
            items: [
              {
                key: '1',
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
            <Text ellipsis>{profile?.email}</Text>
          </Flex>
        </Dropdown>
      ) : (
        <div style={{ width: 200 }}>
          <Skeleton
            active
            avatar={{ size: 30, shape: 'circle' }}
            title={{ style: { marginTop: 6 } }}
            paragraph={false}
          />
        </div>
      )}
    </div>
  );
}
