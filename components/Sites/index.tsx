'use client';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
  Spin,
} from 'antd';
import Link from 'next/link';
import { NumberOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { TSite, TComment } from '@/types';
import { request } from '@/utils/request-client';
import AddFirstSite from '@/components/AddFirstSite';

import { Comment } from './Comment';
import { Header } from './Header';

type Props = {
  sites: TSite[];
};

const COMMENTS_LIMIT = 10;

const Sites = (props: Props) => {
  const [selectedSiteId, selectSiteId] = useState<string>(props.sites[0]?._id);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [comments, setComments] = useState<TComment[]>([]);
  const [sites, setSites] = useState<TSite[]>(props.sites);
  const [hasMore, setHasMore] = useState(false);
  const [skip, setSkip] = useState(0);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const selectedSite = useMemo(
    () => sites.find((site) => site._id === selectedSiteId),
    [sites, selectedSiteId]
  );

  const onDeleteComment = useCallback(
    (commentId: string) => {
      setComments(comments.filter((item) => item._id !== commentId));
    },
    [comments]
  );

  const onDeleteSite = useCallback(
    (siteId: string) => {
      const filtered = sites.filter((item) => item._id !== siteId);
      setSites(filtered);

      if (filtered.length > 0) {
        selectSiteId(filtered[0]._id);
      }
    },
    [sites]
  );

  const loadMoreComments = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    const newSkip = skip + COMMENTS_LIMIT;
    
    const response = await request({
      method: 'GET',
      path: `/comments/sites/${selectedSiteId}?skip=${newSkip}&limit=${COMMENTS_LIMIT}`,
    });
    
    setComments((prev) => [...prev, ...(response.comments || [])]);
    setHasMore(response.hasMore ?? false);
    setSkip(newSkip);
    setLoadingMore(false);
  }, [loadingMore, hasMore, skip, selectedSiteId]);

  // Initial load when site changes
  useEffect(() => {
    const getCommentsBySiteId = async () => {
      setLoading(true);
      setSkip(0);
      
      const response = await request({
        method: 'GET',
        path: `/comments/sites/${selectedSiteId}?skip=0&limit=${COMMENTS_LIMIT}`,
      });
      
      setComments(response.comments || []);
      setHasMore(response.hasMore ?? false);
      setLoading(false);
    };

    if (selectedSiteId) {
      getCommentsBySiteId();
    }
  }, [selectedSiteId]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (loading) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMoreComments();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading, hasMore, loadingMore, loadMoreComments]);

  if (sites.length === 0 || !selectedSite) {
    return <AddFirstSite />;
  }

  return (
    <Row style={{ height: 'calc(100vh - 150px)', overflow: 'hidden' }}>
      <Col xs={10} md={6} style={{ height: '100%' }}>
        <Menu
          onSelect={(info) => selectSiteId(info.key)}
          style={{ width: '100%', height: '100%', paddingBottom: 60 }}
          selectedKeys={[selectedSiteId]}
          items={sites.map((item) => ({
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
      <Col xs={14} md={18} style={{ height: '100%', overflow: 'auto' }}>
        <Header site={selectedSite} onDelete={onDeleteSite} />
        {!loading && comments.length > 0 && (
          <div style={{ width: '100%' }}>
            <List
              loading={loading}
              itemLayout="horizontal"
              style={{ padding: 8 }}
              dataSource={comments}
              renderItem={(comment) => (
                <Comment
                  comment={comment}
                  key={comment._id}
                  onDelete={onDeleteComment}
                />
              )}
            />
            <div
              ref={loadMoreRef}
              style={{
                padding: '20px 0',
                textAlign: 'center',
                minHeight: 60,
              }}
            >
              {loadingMore && <Spin />}
            </div>
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
              paragraph={{ style: { marginTop: 15 }, rows: 1 }}
            />
            <Divider />
            <Skeleton
              active
              avatar={{ size: 30 }}
              title={{ style: { marginTop: 5 } }}
              paragraph={{ style: { marginTop: 15 }, rows: 1 }}
            />
            <Divider />
            <Skeleton
              active
              avatar={{ size: 30 }}
              title={{ style: { marginTop: 5 } }}
              paragraph={{ style: { marginTop: 15 }, rows: 1 }}
            />
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Sites;
