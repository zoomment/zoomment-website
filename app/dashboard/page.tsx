import type { Metadata } from 'next';
import React from 'react';
import AddFirstSite from '@/components/AddFirstSite';

export const metadata: Metadata = {
  title: 'Zoomment.com | Dashboard',
  description:
    'Enhance engagement on your Static Site Generated (SSG) website effortlessly with Zoomment, an open-source commenting widget. Easily embed Zoomment to receive and manage comments, fostering community interaction seamlessly.',
};

const Dashboard: React.FC = () => {
  return <AddFirstSite />;
};

export default Dashboard;
