"use client";
import React from "react";
import { Table, Avatar, Tag } from "antd";
import type { TableColumnsType } from "antd";
import Title from "antd/es/typography/Title";
import { TUser } from "@/types";

type Props = {
  users: TUser[];
};

const getRoleLabel = (role: number): { label: string; color: string } => {
  switch (role) {
    case 1:
      return { label: "Admin", color: "red" };
    case 2:
      return { label: "Super Admin", color: "orange" };
    default:
      return { label: "User", color: "blue" };
  }
};

const columns: TableColumnsType<TUser> = [
  {
    title: "Avatar",
    dataIndex: "gravatar",
    key: "gravatar",
    width: 70,
    render: (gravatar: string, record: TUser) => (
      <Avatar
        src={`https://www.gravatar.com/avatar/${gravatar}?d=monsterid`}
        alt={record.name}
      >
        {record.name?.[0]?.toUpperCase()}
      </Avatar>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: 120,
    render: (role: number) => {
      const { label, color } = getRoleLabel(role);
      return <Tag color={color}>{label}</Tag>;
    },
  },
  {
    title: "Verified",
    dataIndex: "isVerified",
    key: "isVerified",
    width: 90,
    render: (isVerified: boolean) => (
      <Tag color={isVerified ? "green" : "default"}>
        {isVerified ? "Yes" : "No"}
      </Tag>
    ),
  },
  {
    title: "Registered",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 120,
    render: (createdAt: Date) =>
      new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
  },
];

const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={4}>Users Management</Title>
      <Table
        scroll={{ x: 1000, y: "calc(100vh - 300px)" }}
        size="small"
        columns={columns}
        dataSource={users}
        rowKey="_id"
        pagination={false}
      />
    </div>
  );
};

export default UsersList;
