import { getAllPosts } from '@/utils/blogApi';
import { Metadata } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title:
    'Zoomment Blog: Insights on Enhancing Web Engagement & Community Building',
  description:
    "Discover Zoomment, the ultimate commenting solution designed to boost engagement and foster community on your website. Explore features, integration tips, and success stories on our blog. Transform your site's interaction today.",
};

export default async function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <header className="page-head">
        <h1 className="display display--xl">Blog</h1>
        <p>
          Explore the Zoomment blog for tips and stories on boosting website
          engagement with interactive comments.
        </p>
      </header>
      <ol className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.item}>
            <time className={styles.date} dateTime={post.date}>
              {dayjs(post.date).format('DD MMM YYYY')}
            </time>
            <div>
              <h2 className={styles.title}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
