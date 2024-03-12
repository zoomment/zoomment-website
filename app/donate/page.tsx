import { Row, Col, Typography, Card, Button } from 'antd';
import { Metadata } from 'next';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support Zoomment: Donate to Drive Engagement & Innovation',
  description:
    'Join us in shaping the future of web interaction by supporting Zoomment. Your donations directly fund our development and ensure ongoing innovation. Every bit of support counts. Thank you for believing in our mission!',
};

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        width: '100%',
      }}
    >
      <div style={{ padding: '40px 20px', width: '100%' }}>
        <Typography>
          <div>
            <Title level={1} style={{ marginBottom: 10 }}>
              Donate today
            </Title>
            <Paragraph
              style={{ marginBottom: 30, fontSize: '16px', maxWidth: 600 }}
            >
              Every contribution fuels our platform&apos;s evolution and upkeep.
              Consistent support enables us to strategize for the future.
            </Paragraph>
          </div>

          <Row gutter={[28, 28]}>
            <Col md={12}>
              <Card>
                <Title level={2}>Patreon</Title>
                <Paragraph>
                  Support Us on Patreon! Join our community of patrons and enjoy
                  exclusive benefits while helping us enhance and expand
                  Zoomment. Your support fuels our mission to revolutionize web
                  engagement.
                </Paragraph>
                <Link href="https://patreon.com/zoomment" target="_blank">
                  <Button size="large" type="primary">
                    Donate on Patreon
                  </Button>
                </Link>
              </Card>
            </Col>
            <Col md={12}>
              <Card>
                <Title level={2}>Github</Title>
                <Paragraph>
                  Become a Sponsor on GitHub! Your sponsorship directly
                  contributes to the development and improvement of Zoomment.
                  Help us continue building this open-source platform for
                  vibrant web interactions.
                </Paragraph>
                <Link
                  href="https://github.com/sponsors/zoomment"
                  target="_blank"
                >
                  <Button size="large" type="primary">
                    Donate on Github
                  </Button>
                </Link>
              </Card>
            </Col>
          </Row>
        </Typography>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
