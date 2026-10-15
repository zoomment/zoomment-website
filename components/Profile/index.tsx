"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useAuth } from "@/contexts/AuthContext";
import type { ProfileUser } from "./types";
import styles from "./Profile.module.css";

// Avatar, name and caret; shared by the placeholder and the real menu button.
function TriggerFace({ user }: { user: ProfileUser }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.avatar} src={user.avatar} alt="" width={30} height={30} />
      <span className={styles.name}>{user.name}</span>
      <svg className={styles.caret} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <path d="M1 3l4 4 4-4" fill="currentColor" />
      </svg>
    </>
  );
}

// antd's Dropdown only loads for signed-in visitors; the skeleton pill holds
// the slot until it arrives.
const AccountMenu = dynamic(() => import("./AccountMenu"), {
  ssr: false,
  loading: () => <span className={styles.skeleton} aria-hidden="true" />,
});

export default function Profile() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className={styles.profile}>
        <span className={styles.skeleton} aria-hidden="true" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.profile}>
        <Link href="/auth" className={styles.login}>
          Login
        </Link>
      </div>
    );
  }

  const profileUser: ProfileUser = {
    name: user.name || user.email.replace(/@.*/g, ""),
    avatar: `https://www.gravatar.com/avatar/${user.gravatar}?d=monsterid&s=60`,
    role: user.role,
  };

  return (
    <div className={styles.profile}>
      <AccountMenu user={profileUser} onLogout={logout}>
        <TriggerFace user={profileUser} />
      </AccountMenu>
    </div>
  );
}
