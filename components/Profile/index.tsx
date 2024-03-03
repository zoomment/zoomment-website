'use client';
import { Avatar, Dropdown } from 'antd';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { UserOutlined } from '@ant-design/icons';

export default function Profile() {
  const [cookies, setCookies] = useCookies(['token']);
  const router = useRouter();

  const onLogout = () => {
    setCookies('token', '');
    router.refresh();
  };

  return (
    <div className="">
      <Dropdown
        menu={{
          items: [
            {
              key: '4',
              danger: true,
              onClick: onLogout,
              label: 'Logout',
            },
          ],
        }}
      >
        <Avatar size={28} icon={<UserOutlined />} />
      </Dropdown>
    </div>
  );
}
