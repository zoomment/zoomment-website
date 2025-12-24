"use client";
import { Menu, Button } from "antd";
import Link from "next/link";
import { NumberOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { TSite } from "@/types";

type Props = {
  sites: TSite[];
  selectedSiteId: string;
  onSelectSite: (siteId: string) => void;
};

export const SitesList = ({ sites, selectedSiteId, onSelectSite }: Props) => {
  return (
    <>
      <Menu
        onSelect={(info) => onSelectSite(info.key)}
        style={{ width: "100%", height: "100%", paddingBottom: 60 }}
        selectedKeys={[selectedSiteId]}
        items={sites.map((item) => ({
          icon: <NumberOutlined />,
          label: item.domain,
          key: item._id,
        }))}
      />
      <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
        <Link href="/dashboard/add">
          <Button
            style={{ width: "100%" }}
            type="primary"
            size="middle"
            icon={<PlusCircleOutlined />}
          >
            Add New Site
          </Button>
        </Link>
      </div>
    </>
  );
};

