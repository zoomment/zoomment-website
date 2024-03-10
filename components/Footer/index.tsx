'use client';
import { Row, Col, theme, Flex, Divider } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';

const Footer = () => {
  const {
    token: { colorBgContainer, boxShadowTertiary, colorBgSpotlight },
  } = theme.useToken();

  return (
    <footer
      style={{
        background: colorBgContainer,
        width: '100%',
        padding: '10px 0 30px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          width: '100%',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <Row>
          <Col xs={24} md={8}>
            <Flex gap={12} vertical>
              <Title style={{ paddingTop: 20 }} level={5}>
                Zoomment
              </Title>
              <Link href="/benefits">Benefits</Link>
              <Link href="https://patreon.com/zoomment" target="_blank">
                Patreon
              </Link>
              <Link
                href="https://www.producthunt.com/posts/zoomment"
                target="_blank"
              >
                Product Hunt
              </Link>
            </Flex>
          </Col>
          <Col xs={24} md={8}>
            <Flex gap={12} vertical>
              <Title style={{ paddingTop: 20 }} level={5}>
                Resources
              </Title>
              <Link href="/blog">Blog</Link>
              <Link href="https://github.com/zoomment" target="_blank">
                GitHub
              </Link>
            </Flex>
          </Col>
        </Row>
        <Divider />
      </div>
    </footer>
  );
};

export default Footer;
