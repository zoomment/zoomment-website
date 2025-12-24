"use client";
import { useState, useCallback, useMemo } from "react";
import { Row, Col, Tabs } from "antd";
import { CommentOutlined, FileOutlined } from "@ant-design/icons";
import { TSite } from "@/types";
import AddFirstSite from "@/components/AddFirstSite";

import { Header } from "./Header";
import { SitesList } from "./SitesList";
import { CommentsTab } from "./CommentsTab";
import { PagesTab } from "./PagesTab";

type Props = {
  sites: TSite[];
};

type TabKey = "comments" | "pages";

const TAB_ITEMS = [
  {
    key: "comments" as TabKey,
    label: (
      <span>
        <CommentOutlined /> Comments
      </span>
    ),
  },
  {
    key: "pages" as TabKey,
    label: (
      <span>
        <FileOutlined /> Pages
      </span>
    ),
  },
];

const Sites = (props: Props) => {
  const [sites, setSites] = useState<TSite[]>(props.sites);
  const [selectedSiteId, setSelectedSiteId] = useState<string>(
    props.sites[0]?._id
  );
  const [activeTab, setActiveTab] = useState<TabKey>("comments");

  const selectedSite = useMemo(
    () => sites.find((site) => site._id === selectedSiteId),
    [sites, selectedSiteId]
  );

  const onDeleteSite = useCallback(
    (siteId: string) => {
      const filtered = sites.filter((item) => item._id !== siteId);
      setSites(filtered);

      if (filtered.length > 0) {
        setSelectedSiteId(filtered[0]._id);
      }
    },
    [sites]
  );

  if (sites.length === 0 || !selectedSite) {
    return <AddFirstSite />;
  }

  const tabItems = TAB_ITEMS.map((tab) => ({
    ...tab,
    children: (
      <div style={{ height: "calc(100vh - 260px)", overflow: "auto" }}>
        {tab.key === "comments" && <CommentsTab siteId={selectedSiteId} />}
        {tab.key === "pages" && <PagesTab domain={selectedSite.domain} />}
      </div>
    ),
  }));

  return (
    <Row style={{ height: "calc(100vh - 150px)", overflow: "hidden" }}>
      <Col xs={10} md={6} style={{ height: "100%" }}>
        <SitesList
          sites={sites}
          selectedSiteId={selectedSiteId}
          onSelectSite={setSelectedSiteId}
        />
      </Col>
      <Col
        xs={14}
        md={18}
        style={{
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header site={selectedSite} onDelete={onDeleteSite} />
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key as TabKey)}
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
          tabBarStyle={{ margin: "0 16px" }}
          items={tabItems}
        />
      </Col>
    </Row>
  );
};

export default Sites;
