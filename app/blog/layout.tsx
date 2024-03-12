import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        width: '100%',
      }}
    >
      <div style={{ padding: '40px 20px' }}>{children}</div>
    </div>
  );
};

export default BlogLayout;
