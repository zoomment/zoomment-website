import Link from "next/link";
import styles from "./benefits.module.css";

export const metadata = {
  title:
    "Zoomment Advantages: Discover the Benefits of Our Commenting Platform",
  description:
    "Unlock the full potential of your website with Zoomment. Experience advanced features like customizable dashboards, real-time notifications, RSS feeds, and more. Elevate user interaction effortlessly.",
};

const BENEFITS: { title: string; body: string; span: number; tint?: string }[] = [
  {
    title: "🙌 Open Source",
    span: 4,
    tint: "panel--yellow",
    body: "Zoomment embraces the power of open source, inviting developers and tech enthusiasts to contribute to our platform. Being open source means anyone can inspect, modify, and enhance our code, leading to a more secure, efficient, and innovative commenting system. By supporting Zoomment, you're joining a movement that values transparency, collaboration, and the continuous pursuit of excellence.",
  },
  {
    title: "💻 Dashboard for Website Admins",
    span: 2,
    body: "Manage your comments with ease using Zoomment's comprehensive dashboard. Tailored for website administrators, this tool allows you to monitor, approve, and respond to comments efficiently, ensuring your community thrives in a moderated environment.",
  },
  {
    title: "🔔 Notifications",
    span: 2,
    tint: "panel--cyan",
    body: "Stay updated with email notifications whenever a new comment is posted. This feature ensures you never miss out on user engagement, allowing you to respond promptly and keep the conversation flowing.",
  },
  {
    title: "📠 RSS Feed for Comments",
    span: 2,
    body: "Zoomment allows you to generate an RSS feed for your comments, making it easy for you and your audience to stay informed about the latest discussions on your site. This feature enhances content accessibility and keeps your community engaged.",
  },
  {
    title: "⚙️ Customizable",
    span: 2,
    tint: "panel--magenta",
    body: "With Zoomment, you can customize the appearance and functionality of your comments section to match your website's design and cater to your audience's preferences. Choose from various themes, set your preferred language, and more, to create a seamless user experience.",
  },
  {
    title: "👍 Reactions",
    span: 3,
    body: "Enhance the interactivity of your comments section with emoji reactions. Zoomment lets you customize the set of emoticons, providing a fun and expressive way for users to engage with your content and each other.",
  },
  {
    title: "🕹️ No Technical Knowledge Required",
    span: 3,
    tint: "panel--yellow",
    body: "Installing and using Zoomment is a breeze. Our platform is designed to be user-friendly, requiring no technical knowledge. With a simple setup process, you can have Zoomment running on your site in no time, transforming your website's engagement capabilities without the hassle.",
  },
  {
    title: "👁️ Page View Tracking",
    span: 2,
    tint: "panel--cyan",
    body: "Zoomment allows you to track page views for your comments section, giving you insights into how many people are engaging with your content. This feature helps you understand your audience and improve your content.",
  },
  {
    title: "💬 Replies",
    span: 4,
    body: "Zoomment allows you to reply to comments, giving you a way to engage with your audience and respond to their comments. This feature helps you build a community and improve your content.",
  },
];

export default function Benefits() {
  return (
    <div className="container page">
      <header className="page-head">
        <h1 className="display display--xl">Benefits</h1>
        <p>
          Discover Zoomment&apos;s key benefits: Easy-to-manage comments,
          customizable features, and enhanced engagement with no technical
          hassle.
        </p>
      </header>

      <div className={styles.grid}>
        {BENEFITS.map((benefit) => (
          <article
            key={benefit.title}
            className={`panel panel--plain ${benefit.tint ?? ""} ${styles.item}`}
            style={{ gridColumn: `span ${benefit.span}` }}
          >
            <h2 className={styles.title}>{benefit.title}</h2>
            <p className={styles.body}>{benefit.body}</p>
          </article>
        ))}
      </div>

      <div className={`panel panel--ink ${styles.close}`}>
        <p className={styles.closeText}>
          Zoomment is not just a commenting platform; it&apos;s a comprehensive
          solution designed to elevate engagement and streamline management on
          your website. With its array of customizable features and
          user-friendly design, Zoomment is the perfect tool for website
          administrators looking to boost interaction and foster a vibrant
          online community. Explore what Zoomment can do for your site today.
        </p>
        <Link href="/" className="btn-pop">
          Get the snippet
        </Link>
      </div>
    </div>
  );
}
