'use client';
import {
  Menu,
  Row,
  Col,
  Button,
  Flex,
  List,
  Skeleton,
  Empty,
  Divider,
} from 'antd';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NumberOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { TSite, TComment } from '@/types';
import { request } from '@/utils/request-client';
import { Comment } from './Comment';
import { Header } from './Header';

type Props = {
  data: TSite[];
};

const Sites = (props: Props) => {
  const [selectedSiteId, selectSiteId] = useState<string>(props.data[0]._id);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<TComment[]>([]);

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
        <Header />
        {!loading && comments.length > 0 && (
          <div style={{ width: '100%' }}>
            <List
              loading={loading}
              itemLayout="horizontal"
              style={{ padding: 8 }}
              dataSource={comments}
              renderItem={(comment) => (
                <Comment comment={comment} key={comment._id} />
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
        {loading && (
          <div style={{ height: '100%', padding: '20px 8px' }}>
            <Skeleton
              active
              avatar={{ size: 30 }}
              title={{ style: { marginTop: 5 } }}
              paragraph={{ style: { marginTop: 15 } }}
            />
            <Divider />
            <Skeleton
              active
              avatar={{ size: 30 }}
              title={{ style: { marginTop: 5 } }}
              paragraph={{ style: { marginTop: 15 } }}
            />
            <Divider />
            <Skeleton
              active
              avatar={{ size: 30 }}
              title={{ style: { marginTop: 5 } }}
              paragraph={{ style: { marginTop: 15 } }}
            />
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Sites;
