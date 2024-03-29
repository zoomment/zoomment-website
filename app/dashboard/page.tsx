import type { Metadata } from 'next';
import React from 'react';
import { request } from '@/utils/request-server';
import Sites from '@/components/Sites';
import { TSite } from '@/types';

export const metadata: Metadata = {
  title: 'Zoomment | Dashboard',
  description:
    'Enhance engagement on your Static Site Generated (SSG) website effortlessly with Zoomment, an open-source commenting widget. Easily embed Zoomment to receive and manage comments, fostering community interaction seamlessly.',
};

const Dashboard: React.FC = async () => {
  const sites: TSite[] = await request({
    method: 'GET',
    path: '/sites',
  });

  return <Sites sites={sites} />;
};

export default Dashboard;
