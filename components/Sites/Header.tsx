'use client';
import { Button, Flex, Dropdown, theme } from 'antd';
import Title from 'antd/es/typography/Title';

import { MoreOutlined } from '@ant-design/icons';
import { TSite } from '@/types';

export const Header = () => {
  const {
    token: { colorBgContainer, boxShadowTertiary },
  } = theme.useToken();

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        position: 'sticky',
        top: 0,
        padding: '0 15px',
        height: 50,
        zIndex: 80,
        backgroundColor: colorBgContainer,
        boxShadow: boxShadowTertiary,
      }}
    >
      <Title level={4} style={{ margin: 0 }}>
        Comments
      </Title>
      <Dropdown
        trigger={['click']}
        placement="bottomRight"
        menu={{
          items: [
            {
              key: '4',
              danger: true,
              onClick: () => null,
              label: 'Delete Site',
            },
          ],
        }}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    </Flex>
  );
};
