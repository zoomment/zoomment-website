'use client';
import { Menu, Row, Col, Button, Flex } from 'antd';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NumberOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { TSite, TComment } from '@/types';
import { request } from '@/utils/request-client';

type Props = {
  data: TSite[];
};

const Sites = (props: Props) => {
  const [selectedSiteId, selectSiteId] = useState<string>(props.data[0]._id);
  const [loading, setLoading] = useState(false);
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
    <Row style={{ height: 'calc(100vh - 250px)' }}>
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
      <Col xs={18} style={{ padding: 8, height: '100%' }}>
        <Flex align="center" justify="center" style={{ height: '100%' }}>
          {!loading && comments.length > 0 ? (
            <div>
              {comments.map((comment) => (
                <div key={comment._id}>
                  Page URL: {comment.pageUrl} <br />
                  Author: {comment.author}
                  <br />
                  Gravatar: {comment.gravatar}
                  <br />
                  Comment: {comment.body}
                  <br />
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <div>No comments yet</div>
          )}
          {loading && 'Loading...'}
        </Flex>
      </Col>
    </Row>
  );
};

export default Sites;
