"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Flex, List, Skeleton, Empty, Divider, Spin } from "antd";
import { TComment } from "@/types";
import { request } from "@/utils/request-client";
import { Comment } from "./Comment";

const COMMENTS_LIMIT = 10;

type Props = {
  siteId: string;
};

export const CommentsTab = ({ siteId }: Props) => {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [comments, setComments] = useState<TComment[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [skip, setSkip] = useState(0);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const onDeleteComment = useCallback((commentId: string) => {
    setComments((prev) => prev.filter((item) => item._id !== commentId));
  }, []);

  const loadMoreComments = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    const newSkip = skip + COMMENTS_LIMIT;

    const response = await request({
      method: "GET",
      path: `/comments/sites/${siteId}?skip=${newSkip}&limit=${COMMENTS_LIMIT}`,
    });

    setComments((prev) => [...prev, ...(response.comments || [])]);
    setHasMore(response.hasMore ?? false);
    setSkip(newSkip);
    setLoadingMore(false);
  }, [loadingMore, hasMore, skip, siteId]);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      setSkip(0);

      const response = await request({
        method: "GET",
        path: `/comments/sites/${siteId}?skip=0&limit=${COMMENTS_LIMIT}`,
      });

      setComments(response.comments || []);
      setHasMore(response.hasMore ?? false);
      setLoading(false);
    };

    fetchComments();
  }, [siteId]);

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

  if (loading) {
    return (
      <div style={{ height: "100%", padding: "20px 8px" }}>
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
    );
  }

  if (comments.length === 0) {
    return (
      <Flex align="center" justify="center" style={{ height: "100%" }}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No comments yet" />
      </Flex>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <List
        itemLayout="horizontal"
        style={{ padding: 8 }}
        dataSource={comments}
        renderItem={(comment) => (
          <Comment comment={comment} key={comment._id} onDelete={onDeleteComment} />
        )}
      />
      <div
        ref={loadMoreRef}
        style={{
          padding: "20px 0",
          textAlign: "center",
          minHeight: 60,
        }}
      >
        {loadingMore && <Spin />}
      </div>
    </div>
  );
};

