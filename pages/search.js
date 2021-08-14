import React, { useState } from 'react';
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
import useSearchInputState from '../hooks/useSearchInputState';
import { data } from '../shared/data';

const { Search } = Input;
const { Title } = Typography;
const { Meta } = Card;

const { Option } = Select;

export default function SearchPage() {
  const [searchValue, setSearchValue] = useSearchInputState(() => {
    router.push(`/result?q=${searchValue}`);
  });

  const [filteredData, setfilteredData] = useState(data);
  const [value, setValue] = useState(1);
  const router = useRouter();

  const onSearch = (value) => setSearchValue(value);

  const onChange = (e) => {
    setValue(e.target.value);
    setfilteredData(data.filter((item) => item.filter === e.target.value));
  };

  return (
    <Row justify="center" align="middle" gutter={16}>
      <Col span={24} style={{ margin: '32px 8px' }}>
        <Title level={2} align="center">
          บริการแนะนำ
        </Title>
        <Search
          placeholder="ค้นหา..."
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
    </Row>
  );
}
