import { Feed } from 'feed';
import { TComment } from '@/types';
import { GetServerSideProps } from 'next';

const generateRssFeed = async (posts: TComment[]) => {
  const feed = new Feed({
    title: 'Zoomment.com',
    description: 'Stay up to date with my latest content',
    id: 'https://zoomment.com',
    link: 'https://zoomment.com',
    language: 'en',
    copyright: '',
    author: {
      name: 'Zoomment.com',
      link: 'https://zoomment.com',
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.author,
      id: post.pageId,
      link: post.pageUrl,
      description: post.body,
      date: new Date(post.createdAt),
    });
  });

  return feed.rss2();
};

const Rss = () => {};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments?domain=${params?.domain}`
  );
  const json: TComment[] = await response.json();
  const rss = await generateRssFeed(json);

  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();

  return { props: {} };
};

export default Rss;
