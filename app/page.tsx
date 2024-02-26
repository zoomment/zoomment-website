import Builder from '@/components/Builder';
import { Metadata } from 'next';

// either Static metadata
export const metadata: Metadata = {
  title: 'Zoomment: Empower Your Website with Open Source Commenting Widget',
  description:
    'Enhance engagement on your Static Site Generated (SSG) website effortlessly with Zoomment, an open-source commenting widget. Easily embed Zoomment to receive and manage comments, fostering community interaction seamlessly.',
};

export default function Home() {
  return (
    <main className="container py-10 px-4">
      <Builder />
    </main>
  );
}
