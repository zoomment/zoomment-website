import type { Metadata } from "next";
import React from "react";
import { request } from "@/utils/request-server";
import { TUser } from "@/types";
import UsersList from "@/components/UsersList";

export const metadata: Metadata = {
  title: "Zoomment | Admin",
  description: "Admin panel - Manage users",
};

const Admin: React.FC = async () => {
  const users: TUser[] = await request({
    method: "GET",
    path: "/users",
  });

  return <UsersList users={users} />;
};

export default Admin;
