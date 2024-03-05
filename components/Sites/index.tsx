import { Menu, Row, Col, Button } from 'antd';
import Link from 'next/link';
import { CommentOutlined } from '@ant-design/icons';

type Props = {
  data: object[];
};

const Sites = (props: Props) => {
  return (
    <Row style={{ height: 'calc(100vh - 250px)' }}>
      <Col xs={6} style={{ height: '100%' }}>
        <Menu
          style={{ width: '100%', height: '100%', paddingBottom: 60 }}
          defaultSelectedKeys={['def.am']}
          items={props.data.map((item) => ({
            icon: <CommentOutlined />,
            label: item.domain,
            key: item.domain,
          }))}
        />
        <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8 }}>
          <Link href="/dashboard/add">
            <Button style={{ width: '100%' }} type="default">
              Add New Site
            </Button>
          </Link>
        </div>
      </Col>
      <Col xs={18}>No comments yet</Col>
    </Row>
  );
};

export default Sites;
