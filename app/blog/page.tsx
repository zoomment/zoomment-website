import { getAllPosts } from '@/utils/blogApi';
import { Metadata } from 'next';
import Link from 'next/link';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';
import { Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import markdownToHtml from '@/utils/markdownToHtml';
import dayjs from 'dayjs';

export const metadata = {
  title: 'Zoomment | Blog',
  description:
    "Discover Zoomment, the ultimate commenting solution designed to boost engagement and foster community on your website. Explore features, integration tips, and success stories on our blog. Transform your site's interaction today.",
};

export default async function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <Title level={1} style={{ marginBottom: 10 }}>
        Blog
      </Title>
      <Typography style={{ marginBottom: 30, fontSize: '16px', maxWidth: 600 }}>
        Explore the Zoomment blog for tips and stories on boosting website
        engagement with interactive comments.
      </Typography>
      {posts.map((post) => (
        <Typography key={post.slug}>
          {/* {post.preview} */}
          <Link
            as={`/blog/${post.slug}`}
            href="/blog/[slug]"
            style={{ textDecoration: 'underline' }}
          >
            <Title level={4}>{post.title}</Title>
          </Link>
          {/* {post.coverImage} */}
          <Paragraph>
            <CalendarOutlined /> {dayjs(post.date).format('DD MMM YYYY')}
          </Paragraph>
          <Paragraph>{post.excerpt}</Paragraph>
        </Typography>
      ))}
    </div>
  );
}
