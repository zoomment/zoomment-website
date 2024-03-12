'use client';
import { Card, Button, theme } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export const DonationCard = ({
  name,
  children,
  logo,
  url,
}: {
  name: string;
  children: ReactNode;
  logo: string;
  url: string;
}) => {
  const {
    token: { colorPrimaryBorder },
  } = theme.useToken();

  return (
    <Card>
      <Image src={logo} width={100} height={100} alt={name} />
      <Title
        level={2}
        style={{
          marginTop: 13,
          borderBottom: `4px solid ${colorPrimaryBorder}`,
          display: 'inline-block',
        }}
      >
        {name}
      </Title>
      <Paragraph>{children}</Paragraph>
      <Link href={url} target="_blank">
        <Button size="large" type="primary">
          Donate on {name}
        </Button>
      </Link>
    </Card>
  );
};
