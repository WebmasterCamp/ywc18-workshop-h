import React, { useState, useEffect } from 'react';
import Head from 'next/head';
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
  Rate,
} from 'antd';
import useSearchInputState from '../hooks/useSearchInputState';

import { data } from '../shared/data';

const { Search } = Input;
const { Title, Text } = Typography;
const { Meta } = Card;
const { Option } = Select;

export default function ResultPage() {
  const router = useRouter();
  const { q } = router.query;
  const [filteredData, setfilteredData] = useState(data);
  const [searchValue, setSearchValue] = useSearchInputState(() => {
    router.push(`/result?q=${searchValue}`);
  });

  const [value, setValue] = useState(1);

  const onSearch = (value) => setSearchValue(value);

  useEffect(() => {
    setfilteredData(
      data.filter((item) => {
        return item.title.includes(q);
      })
    );
  }, [q]);

  const onChange = (e) => {
    setValue(e.target.value);
    setfilteredData(data.filter((item) => item.filter === e.target.value));
  };

  return (
    <div>
      <Head>
        <title>บริการ | HOSPIN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row justify="center" align="middle" gutter={16}>
        <Col span={36} style={{ margin: '32px 8px' }}>
          <Title level={2} align="center">
            บริการแนะนำ
          </Title>
          <Search
            placeholder="ค้นหาแพทย์ทางเลือก..."
            allowClear
            enterButton="ค้นหา"
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col span={18} style={{ margin: '32px 0' }}>
          <Title level={3} align="center">
            บริการแพทย์ทางเลือก
          </Title>
          <Select defaultValue="1" style={{ width: '100%' }}>
            <Option value="1">ฝังเข็ม</Option>
            <Option value="2">การแพทย์แผนโบราณของจีน</Option>
            <Option value="3">การจัดกระดูก</Option>
            <Option value="4">การใช้สมาธิบำบัด</Option>
            <Option value="5">อื่น ๆ</Option>
          </Select>
        </Col>
        <Col span={24} style={{ margin: '16px 0' }}>
          <Row justify="center">
            <Radio.Group
              defaultValue="a"
              buttonStyle="solid"
              onChange={onChange}
              value={value}
            >
              <Radio.Button value={1}>แนะนำ</Radio.Button>
              <Radio.Button value={2}>คะแนน</Radio.Button>
              <Radio.Button value={3}>ระยะทาง</Radio.Button>
              <Radio.Button value={4}>ราคาต่ำ - สูง</Radio.Button>
            </Radio.Group>
          </Row>
        </Col>
        <Col span={24} style={{ margin: '32px 0' }}>
          <Title level={3} align="center">
            ผลลัพธ์การค้นหา
          </Title>
          {filteredData.map((item, i) => (
            <Card
              style={{ width: '100%', margin: '16px 0' }}
              key={i}
              cover={<img alt="cover" src={item.cover} />}
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
                title={<Title level={4}>{item.title}</Title>}
                description={
                  <div>
                    <div style={{ wordBreak: 'break-word', fontSize: '18px' }}>
                      {item.doctor_name}
                    </div>
                    <div style={{ wordBreak: 'break-word', fontSize: '14px' }}>
                      ประเภท: {item.category}
                    </div>
                    <div style={{ wordBreak: 'break-word', fontSize: '14px' }}>
                      เรทติ้ง: <Rate allowHalf defaultValue={item.rating} />
                    </div>
                    <div style={{ wordBreak: 'break-word', fontSize: '14px' }}>
                      ที่ตั้ง: {item.location}
                    </div>
                  </div>
                }
              />
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}
