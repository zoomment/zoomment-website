"use client";
import { ReactNode, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ConfigProvider, Dropdown, type MenuProps } from "antd";
import { theme } from "@/app/theme";
import type { ProfileUser } from "./types";
import styles from "./Profile.module.css";

type Props = {
  user: ProfileUser;
  onLogout: () => void;
  children: ReactNode;
};

export default function AccountMenu({ user, onLogout, children }: Props) {
  const router = useRouter();

  // Prefetch so the dashboard's loading skeleton is already on the client and
  // shows the instant a menu item is clicked.
  useEffect(() => {
    router.prefetch("/dashboard");
    router.prefetch("/dashboard/account");
    if (user.role === 2) router.prefetch("/dashboard/admin");
  }, [router, user.role]);

  const items = useMemo(() => {
    const list: MenuProps["items"] = [
      { key: "dashboard", label: "Dashboard", onClick: () => router.push("/dashboard") },
      { key: "donate", label: "Donate", onClick: () => router.push("/donate") },
      {
        key: "account",
        label: "Account Settings",
        onClick: () => router.push("/dashboard/account"),
      },
    ];

    if (user.role === 2) {
      list.push({ key: "admin", label: "Admin", onClick: () => router.push("/dashboard/admin") });
    }

    list.push(
      { type: "divider" },
      {
        key: "logout",
        danger: true,
        label: "Logout",
        onClick: () => {
          onLogout();
          router.push("/");
        },
      }
    );

    return list;
  }, [user.role, onLogout, router]);

  return (
    <ConfigProvider theme={theme}>
      <Dropdown trigger={["click"]} placement="bottomRight" menu={{ items }}>
        <button
          type="button"
          className={styles.trigger}
          aria-label={`Account menu for ${user.name}`}
        >
          {children}
        </button>
      </Dropdown>
    </ConfigProvider>
  );
}
