'use client';
import { useState, useCallback } from 'react';
import { Button, Flex, Dropdown, theme } from 'antd';
import Title from 'antd/es/typography/Title';
import { MoreOutlined } from '@ant-design/icons';
import { TSite } from '@/types';
import { request } from '@/utils/request-client';

type Props = {
  site: TSite;
  onDelete: (siteId: string) => void;
};

export const Header = ({ site, onDelete }: Props) => {
  const [loading, setLoading] = useState(false);
  const {
    token: { colorBgContainer, boxShadowTertiary },
  } = theme.useToken();

  const siteId = site._id;

  const onDeleteSite = useCallback(async () => {
    setLoading(true);

    await request({
      method: 'DELETE',
      path: `/sites/${siteId}`,
    });

    onDelete(siteId);
    setLoading(false);
  }, [siteId, onDelete]);

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
              key: '1',
              onClick: () => window.open(`/rss/${site.domain}`, '_blank'),
              label: 'Get RSS feed',
            },
            {
              key: '4',
              danger: true,
              onClick: () => onDeleteSite(),
              label: 'Delete site',
            },
          ],
        }}
      >
        <Button loading={loading} type="text" icon={<MoreOutlined />} />
      </Dropdown>
    </Flex>
  );
};
