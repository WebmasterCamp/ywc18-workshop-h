import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Input,
  Row,
  Col,
  Typography,
  Select,
  Radio,
  Card,
  Avatar,
  Button,
} from 'antd';
import { data } from '../shared/data';

const { Meta } = Card;
const { Title } = Typography;

export default function ResultPage() {
  const router = useRouter();
  const { q } = router.query;
  const [filteredData, setfilteredData] = useState(data);

  useEffect(() => {
    setfilteredData(
      data.filter((item) => {
        return item.title.includes(q);
      })
    );
  }, []);

  return (
    <Row justify="center" align="middle" gutter={16}>
      <Col span={18} style={{ margin: '32px 0' }}>
        <Title level={3} align="center">
          ผลลัพธ์การค้นหา
        </Title>
        {filteredData.map((item, i) => (
          <Card
            style={{ width: 300, margin: '16px 0' }}
            key={i}
            cover={<img alt="example" src={item.cover} />}
            actions={[
              <Button
                type="primary"
                key={1}
                style={{ width: 120 }}
                onClick={() => {
                  router.push(`/detail/${item.id}`);
                }}
              >
                จองเลย
              </Button>,
            ]}
          >
            <Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.title}
              description={item.location}
            />
          </Card>
        ))}
      </Col>
    </Row>
  );
}
