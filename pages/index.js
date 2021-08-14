import { Row, Col, Typography, Card, Input, Button } from 'antd';
import useSearchInputState from '../hooks/useSearchInputState';
import { useRouter } from 'next/router';
import { blog } from '../shared/blog';

const { Meta } = Card;
const { Title } = Typography;
const { Search } = Input;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function IndexPage() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useSearchInputState(() => {
    router.push(`/result?q=${searchValue}`);
  });

  const onSearch = (value) => setSearchValue(value);

  return (
    <Row justify="center" align="middle" gutter={16}>
      <Col span={24} style={{ margin: '32px 0' }}>
        <Row justify="center" align="middle">
          <img
            src="/logo.png"
            alt="HOSPIN"
            style={{
              width: '50%',
              margin: '32px 0',
            }}
          />
        </Row>
        <Search
          placeholder="ค้นหา..."
          allowClear
          enterButton="ค้นหา"
          size="large"
          onSearch={onSearch}
        />
      </Col>
      <Col span={24} style={{ margin: '32px 0' }}>
        <Title level={2} align="center">
          Blog
        </Title>
        {blog.map((item, i) => (
          <div style={{ margin: '32px 0' }} key={i}>
            <Card
              key={i}
              hoverable
              cover={<img alt={item.title} src={item.cover} />}
              actions={[
                <Button
                  type="primary"
                  key={1}
                  style={{ width: 120 }}
                  onClick={() => {
                    router.push(`/blog/${item.id}`);
                  }}
                >
                  อ่านเพิ่มเติม
                </Button>,
              ]}
            >
              <Meta
                title={item.title}
                description={item.content.split(0, 10)}
              />
            </Card>
          </div>
        ))}
      </Col>
    </Row>
  );
}
