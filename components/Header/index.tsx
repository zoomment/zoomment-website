'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Profile from '@/components/Profile';
import styles from './Header.module.css';

const LINKS = [
  { href: '/benefits', label: 'Benefits' },
  { href: '/blog', label: 'Blog' },
  { href: '/donate', label: 'Donate' },
  { href: 'https://github.com/zoomment', label: 'GitHub', external: true },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Zoomment home">
          <Image priority alt="" width={37} height={32} src="/logo.svg" />
          <span className={styles.wordmark}>Zoomment</span>
          <span className={styles.beta}>Beta</span>
        </Link>
        <nav className={styles.nav} aria-label="Main">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              aria-current={pathname?.startsWith(link.href) ? 'page' : undefined}
              {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.profile}>
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
