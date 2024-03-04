'use client';
import { Button, Flex } from 'antd';
import { useRouter } from 'next/navigation';
import { PlusCircleOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';

export default function AddFirstSite() {
  const router = useRouter();

  return (
    <Flex
      align="center"
      justify="center"
      vertical
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        textAlign: 'center',
      }}
    >
      <Title level={4}>Manage Your Site Comments Here!</Title>
      <Text style={{ marginBottom: 30, maxWidth: 400 }}>
        Add your site to the dashboard and take control of your comments. Click
        &quot;Add new site&quot; to get started.
      </Text>
      <Button
        onClick={() => router.push('/dashboard/add')}
        size="large"
        type="primary"
        icon={<PlusCircleOutlined />}
      >
        Add New Site
      </Button>
    </Flex>
  );
}
