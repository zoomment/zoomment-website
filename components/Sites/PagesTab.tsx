"use client";
import { useState, useEffect } from "react";
import { Flex, Empty, List, Skeleton, Divider, Tooltip } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { request } from "@/utils/request-client";

type PageView = {
  pageId: string;
  count: number;
};

type Props = {
  domain: string;
};

export const PagesTab = ({ domain }: Props) => {
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState<PageView[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      setLoading(true);

      const response = await request({
        method: "GET",
        path: `/visitors/domain?domain=${domain}`,
      });

      setPages(response.pages || []);
      setLoading(false);
    };

    fetchPages();
  }, [domain]);

  if (loading) {
    return (
      <div style={{ height: "100%", padding: "20px 8px" }}>
        <Skeleton active paragraph={{ rows: 1 }} />
        <Divider />
        <Skeleton active paragraph={{ rows: 1 }} />
        <Divider />
        <Skeleton active paragraph={{ rows: 1 }} />
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <Flex align="center" justify="center" style={{ height: "100%" }}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No page views yet"
        />
      </Flex>
    );
  }

  return (
    <List
      itemLayout="horizontal"
      style={{ padding: 8 }}
      dataSource={pages}
      renderItem={(page) => (
        <List.Item key={page.pageId}>
          <Flex
            align="center"
            justify="space-between"
            style={{ width: "100%" }}
            gap={16}
          >
            <Tooltip title={page.pageId} placement="topLeft">
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 14,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {page.pageId}
              </span>
            </Tooltip>
            <Flex
              align="center"
              gap={6}
              style={{ color: "#666", flexShrink: 0, paddingRight: 16 }}
            >
              <EyeOutlined />
              <span style={{ fontWeight: 500 }}>
                {page.count.toLocaleString()}
              </span>
            </Flex>
          </Flex>
        </List.Item>
      )}
    />
  );
};
