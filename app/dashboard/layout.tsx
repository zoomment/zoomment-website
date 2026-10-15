import React from 'react';
import Link from 'next/link';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 40 }}>
      <nav aria-label="Breadcrumb" style={{ margin: '0 0 14px' }}>
        <Link
          href="/dashboard"
          className="caption caption--inline"
          style={{ textDecoration: 'none', fontSize: 13, borderWidth: 3 }}
        >
          Dashboard
        </Link>
      </nav>
      <div
        className="panel panel--plain"
        style={{
          padding: 0,
          overflow: 'hidden',
          minHeight: 'calc(100vh - 250px)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
