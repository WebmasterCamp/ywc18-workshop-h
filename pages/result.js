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
const { Option } = Select;
const { Title } = Typography;

export default function result() {
  return (
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
  );
}
