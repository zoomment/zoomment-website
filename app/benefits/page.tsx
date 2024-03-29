import Title from 'antd/es/typography/Title';
import { Row, Col, Card } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

const Benefit = ({ title, children }: { title: string; children: string }) => {
  return (
    <Col md={12}>
      <Card style={{ height: '100%' }}>
        <Title level={4}>{title}</Title>
        <Paragraph>{children}</Paragraph>
      </Card>
    </Col>
  );
};

export const metadata = {
  title:
    'Zoomment Advantages: Discover the Benefits of Our Commenting Platform',
  description:
    'Unlock the full potential of your website with Zoomment. Experience advanced features like customizable dashboards, real-time notifications, RSS feeds, and more. Elevate user interaction effortlessly.',
};

export default function Benefits() {
  return (
    <main
      style={{
        maxWidth: 1000,
        width: '100%',
        margin: '0 auto',
        padding: '40px 20px',
      }}
    >
      <Title style={{ marginBottom: 10 }} level={1}>
        Benefits
      </Title>
      <Paragraph style={{ marginBottom: 30, fontSize: '16px', maxWidth: 600 }}>
        Discover Zoomment&apos;s key benefits: Easy-to-manage comments,
        customizable features, and enhanced engagement with no technical hassle.
      </Paragraph>
      <Row gutter={[28, 28]}>
        <Benefit title="🙌 Open Source">
          Zoomment embraces the power of open source, inviting developers and
          tech enthusiasts to contribute to our platform. Being open source
          means anyone can inspect, modify, and enhance our code, leading to a
          more secure, efficient, and innovative commenting system. By
          supporting Zoomment, you&apos;re joining a movement that values
          transparency, collaboration, and the continuous pursuit of excellence.
        </Benefit>
        <Benefit title="💻 Dashboard for Website Admins">
          Manage your comments with ease using Zoomment&apos;s comprehensive
          dashboard. Tailored for website administrators, this tool allows you
          to monitor, approve, and respond to comments efficiently, ensuring
          your community thrives in a moderated environment.
        </Benefit>
        <Benefit title="🔔 Notifications">
          Stay updated with email notifications whenever a new comment is
          posted. This feature ensures you never miss out on user engagement,
          allowing you to respond promptly and keep the conversation flowing.
        </Benefit>
        <Benefit title="📠 RSS Feed for Comments">
          Zoomment allows you to generate an RSS feed for your comments, making
          it easy for you and your audience to stay informed about the latest
          discussions on your site. This feature enhances content accessibility
          and keeps your community engaged.
        </Benefit>
        <Benefit title="⚙️ Customizable">
          With Zoomment, you can customize the appearance and functionality of
          your comments section to match your website&apos;s design and cater to
          your audience&apos;s preferences. Choose from various themes, set your
          preferred language, and more, to create a seamless user experience.
        </Benefit>
        <Benefit title="👍 Reactions">
          Enhance the interactivity of your comments section with emoji
          reactions. Zoomment lets you customize the set of emoticons, providing
          a fun and expressive way for users to engage with your content and
          each other.
        </Benefit>
        <Benefit title="🕹️ No Technical Knowledge Required">
          Installing and using Zoomment is a breeze. Our platform is designed to
          be user-friendly, requiring no technical knowledge. With a simple
          setup process, you can have Zoomment running on your site in no time,
          transforming your website&apos;s engagement capabilities without the
          hassle.
        </Benefit>
      </Row>
      <Paragraph style={{ marginTop: 30 }}>
        Zoomment is not just a commenting platform; it&apos;s a comprehensive
        solution designed to elevate engagement and streamline management on
        your website. With its array of customizable features and user-friendly
        design, Zoomment is the perfect tool for website administrators looking
        to boost interaction and foster a vibrant online community. Explore what
        Zoomment can do for your site today.
      </Paragraph>
    </main>
  );
}
