import { Carousel, Row, Col, Typography, Card, Search } from 'antd';
import { useRouter } from 'next/router';
import useSearchInputState from '../hooks/useSearchInputState';
import { blog } from '../shared/blog';

const { Meta } = Card;
const { Title } = Typography;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Home() {
  const [searchValue, setSearchValue] = useSearchInputState(() => {
    router.push(`/result?q=${searchValue}`);
  });

  const router = useRouter();

  const onSearch = (value) => setSearchValue(value);

  return (
    <Row justify="center" align="middle" gutter={16}>
      <Col span={24} style={{ margin: '32px 0' }}>
        <Title level={2} align="center">
          Hospin
        </Title>
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
          <Card
            hoverable
            style={{ height: 100 }}
            cover={<img alt={item.title} src={item.cover} />}
          >
            <Meta title={item.title} description={item.content} />
          </Card>
        ))}
      </Col>
    </Row>
  );
}
