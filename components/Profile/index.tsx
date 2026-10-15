"use client";
import { Avatar, Dropdown, Flex, Skeleton, Button } from "antd";
import styles from "./Profile.module.css";
import { useRouter } from "next/navigation";
import {
  UserOutlined,
  CaretDownOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useAuth } from "@/contexts/AuthContext";
import { useMemo } from "react";

export default function Profile() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const emailName = user && user.email.replace(/@.*/g, "");

  const menuItems = useMemo(() => {
    const items: any[] = [
      {
        key: "1",
        onClick: () => router.push("/dashboard"),
        label: "Dashboard",
      },
      {
        key: "2",
        onClick: () => router.push("/donate"),
        label: "Donate",
      },
      {
        key: "3",
        onClick: () => router.push("/dashboard/account"),
        label: "Account Settings",
      },
      { type: "divider" },
      {
        key: "4",
        danger: true,
        onClick: () => {
          logout();
          router.push("/");
        },
        label: "Logout",
      },
    ];

    if (user?.role === 2) {
      items.splice(3, 0, {
        key: "5",
        onClick: () => router.push("/dashboard/admin"),
        label: "Admin",
      });
    }

    return items;
  }, [user, logout, router]);

  return (
    <div className={styles.profile}>
      {loading && <Skeleton.Button active className={styles.skeleton} />}
      {!loading && user && (
        <Dropdown
          trigger={["click"]}
          menu={{
            items: menuItems,
          }}
        >
          <button
            type="button"
            className={styles.trigger}
            aria-label={`Account menu for ${user.name || emailName}`}
          >
            <Avatar
              className={styles.avatar}
              size={30}
              icon={<UserOutlined />}
              src={`https://www.gravatar.com/avatar/${user?.gravatar}?d=monsterid`}
            />
            <span className={styles.name}>{user.name || emailName}</span>
            <CaretDownOutlined className={styles.caret} />
          </button>
        </Dropdown>
      )}
      {!loading && !user && (
        <Flex gap={8}>
          <Button
            onClick={() => router.push("/auth")}
            icon={<LoginOutlined />}
            type="primary"
          >
            Login
          </Button>
        </Flex>
      )}
    </div>
  );
}
