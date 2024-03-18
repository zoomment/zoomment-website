import { Row, Col, Typography } from 'antd';
import { Metadata } from 'next';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { DonationCard } from '@/components/DonationCard';

export const metadata: Metadata = {
  title: 'Support Zoomment: Donate to Drive Engagement & Innovation',
  description:
    'Join us in shaping the future of web interaction by supporting Zoomment. Your donations directly fund our development and ensure ongoing innovation. Every bit of support counts. Thank you for believing in our mission!',
};

const Donate = () => {
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
              <DonationCard
                name="Patreon"
                logo="./patreon-logo.svg"
                url="https://patreon.com/zoomment"
              >
                Support Us on Patreon! Join our community of patrons and enjoy
                exclusive benefits while helping us enhance and expand Zoomment.
                Your support fuels our mission to revolutionize web engagement.
              </DonationCard>
            </Col>
            <Col md={12}>
              <DonationCard
                name="Github"
                logo="../github-mark.svg"
                url="https://github.com/sponsors/zoomment"
              >
                Become a Sponsor on GitHub! Your sponsorship directly
                contributes to the development and improvement of Zoomment. Help
                us continue building this open-source platform for vibrant web
                interactions.
              </DonationCard>
            </Col>
            <Col md={12}>
              <DonationCard
                name="Open Collective"
                logo="../opencollective-icon.svg"
                url="https://opencollective.com/zoomment"
              >
                Your contributions on Open Collective directly fuel Zoomment's
                development, helping us enhance features, bolster security, and
                support our open-source community. Every donation, big or small,
                empowers us to keep Zoomment free, innovative, and user-centric.
              </DonationCard>
            </Col>
          </Row>
        </Typography>
      </div>
    </div>
  );
};

export default Donate;
