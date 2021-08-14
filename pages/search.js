import React from 'react';
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
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

const { Search } = Input;
const { Title } = Typography;
const { Meta } = Card;

const { Option } = Select;

const data = [
  {
    id: 1,
    category: 1,
    filter: 2,
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'นายแพทย์นอนนะ นะนะ',
    rating: 4,
    location: 'บางรัก',
  },
];

export default function search() {
  const onSearch = (value) => console.log(value);

  return (
    <Row justify="center" align="middle" style={{ padding: 30 }} gutter={16}>
      <Col span={24} style={{ margin: '32px 0' }}>
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
      <Col span={24} style={{ margin: '32px 0' }}>
        <Title level={3} align="center">
          บริการแพทย์ทางเลือก
        </Title>
        <Row justify="center">
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">แนะนำ</Radio.Button>
            <Radio.Button value="b">คะแนน</Radio.Button>
            <Radio.Button value="c">ระยะทาง</Radio.Button>
            <Radio.Button value="d">ราคาต่ำ - สูง</Radio.Button>
          </Radio.Group>
        </Row>
      </Col>
      {data.map((item, i) => (
        <Card
          style={{ width: 300 }}
          key={i}
          cover={<Image alt="example" src={item.cover} />}
          actions={[
            <Button type="primary" key={1} style={{ width: 120 }}>
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
