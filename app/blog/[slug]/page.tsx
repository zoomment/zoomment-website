import { getAllPosts, getPostBySlug } from "@/utils/blogApi";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import markdownToHtml from "@/utils/markdownToHtml";
import { Widget } from "@/components/Widget";
import dayjs from "dayjs";
import styles from "./post.module.css";

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
    <article className={styles.post}>
      <Link href="/blog" className={styles.back}>
        ← All posts
      </Link>
      <h1 className={styles.title}>{post.title}</h1>
      <time className={styles.date} dateTime={post.date}>
        {dayjs(post.date).format("DD MMM YYYY")}
      </time>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
      <section className={`panel ${styles.comments}`} aria-label="Comments">
        <span className="caption">Talk back</span>
        <Widget />
      </section>
    </article>
  );
}
