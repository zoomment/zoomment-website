'use client';
import {
  Menu,
  Row,
  Col,
  Button,
  Flex,
  List,
  Spin,
  Avatar,
  Popconfirm,
  Empty,
  Dropdown,
  theme,
} from 'antd';
import Title from 'antd/es/typography/Title';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  NumberOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import { TSite, TComment } from '@/types';
import { request } from '@/utils/request-client';
import dayjs from 'dayjs';

type Props = {
  data: TSite[];
};

const Sites = (props: Props) => {
  const [selectedSiteId, selectSiteId] = useState<string>(props.data[0]._id);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<TComment[]>([]);
  const {
    token: { colorBgContainer, boxShadowTertiary },
  } = theme.useToken();

  useEffect(() => {
    const getCommentsBySiteId = async () => {
      setLoading(true);
      const comments = await request({
        method: 'GET',
        path: `/comments/sites/${selectedSiteId}`,
      });
      setComments(comments);
      setLoading(false);
    };
    getCommentsBySiteId();
  }, [selectedSiteId]);

  const onDeleteSite = async (comment: TComment) => {
    await request({
      method: 'DELETE',
      path: `/comments/${comment._id}?secret=${comment.secret}`,
    });
  };

  return (
    <Row style={{ height: 'calc(100vh - 150px)', overflow: 'hidden' }}>
      <Col xs={6} style={{ height: '100%' }}>
        <Menu
          onSelect={(info) => selectSiteId(info.key)}
          style={{ width: '100%', height: '100%', paddingBottom: 60 }}
          defaultSelectedKeys={[selectedSiteId]}
          items={props.data.map((item) => ({
            icon: <NumberOutlined />,
            label: item.domain,
            key: item._id,
          }))}
        />
        <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
          <Link href="/dashboard/add">
            <Button
              style={{ width: '100%' }}
              type="primary"
              size="middle"
              icon={<PlusCircleOutlined />}
            >
              Add New Site
            </Button>
          </Link>
        </div>
      </Col>
      <Col xs={18} style={{ height: '100%', overflow: 'auto' }}>
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

        {!loading && comments.length > 0 && (
          <div style={{ width: '100%' }}>
            <List
              loading={loading}
              itemLayout="horizontal"
              style={{ padding: 8 }}
              dataSource={comments}
              renderItem={(comment) => (
                <List.Item
                  key={comment._id}
                  actions={[
                    <Popconfirm
                      key={`${comment._id}-delete`}
                      destroyTooltipOnHide
                      title="Delete comment"
                      description="Are you sure to delete this comment?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => onDeleteSite(comment)}
                    >
                      <Button type="text" icon={<DeleteOutlined />} />
                    </Popconfirm>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://www.gravatar.com/avatar/${comment.gravatar}?d=monsterid`}
                      />
                    }
                    title={<>{comment.author}</>}
                    description={
                      <>
                        <a
                          style={{ fontSize: 12 }}
                          target="_blank"
                          href={comment.pageUrl}
                        >
                          {dayjs(comment.createdAt).format(
                            'HH:mm - DD MMM YYYY'
                          )}
                        </a>
                        <div>{comment.body}</div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        )}
        {!loading && comments.length === 0 && (
          <Flex align="center" justify="center" style={{ height: '100%' }}>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No comments yet"
            />
          </Flex>
        )}
        <Flex align="center" justify="center" style={{ height: '100%' }}>
          {loading && <Spin />}
        </Flex>
      </Col>
    </Row>
  );
};

export default Sites;
