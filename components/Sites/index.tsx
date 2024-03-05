import { Menu, Row, Col, Button, Flex } from 'antd';
import Link from 'next/link';
import { NumberOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { TSite } from '@/types';

type Props = {
  data: TSite[];
};

const Sites = (props: Props) => {
  const firstSite = props.data[0];

  return (
    <Row style={{ height: 'calc(100vh - 250px)' }}>
      <Col xs={6} style={{ height: '100%' }}>
        <Menu
          style={{ width: '100%', height: '100%', paddingBottom: 60 }}
          defaultSelectedKeys={[firstSite.domain]}
          items={props.data.map((item) => ({
            icon: <NumberOutlined />,
            label: item.domain,
            key: item.domain,
          }))}
        />
        <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
          <Link href="/dashboard/add">
            <Button
              style={{ width: '100%' }}
              type="primary"
              size="middle"
              icon={<PlusCircleOutlined />}
            >
              Add New Site
            </Button>
          </Link>
        </div>
      </Col>
      <Col xs={18} style={{ padding: 8, height: '100%' }}>
        <Flex align="center" justify="center" style={{ height: '100%' }}>
          No comments yet
        </Flex>
      </Col>
    </Row>
  );
};

export default Sites;
