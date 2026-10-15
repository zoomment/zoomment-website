import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container page">{children}</div>;
};

export default BlogLayout;
