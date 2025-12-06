import { getAllPosts, getPostBySlug } from "@/utils/blogApi";
import { Metadata } from "next";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Typography } from "antd";
import { notFound } from "next/navigation";
import markdownToHtml from "@/utils/markdownToHtml";
import { Widget } from "@/components/Widget";
import dayjs from "dayjs";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Zoomment Blog`;

  return {
    title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <Typography>
        {/* {post.preview} */}
        <Title level={1}>{post.title}</Title>
        {/* {post.coverImage} */}
        <Paragraph style={{ fontSize: 20 }}>
          {dayjs(post.date).format("DD MMM YYYY")}
        </Paragraph>
        <Paragraph>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Paragraph>
      </Typography>
      <Widget />
    </>
  );
}
