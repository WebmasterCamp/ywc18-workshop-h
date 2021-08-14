import React from 'react';
import { Row, Col, Typography } from 'antd';

export default function blog() {
  return (
    <Row justify="center" align="middle" gutter={16}>
      <Col span={18} style={{ margin: '32px 0' }}>
        <Typography.Title level={3} align="center">
          บทความ
        </Typography.Title>
      </Col>
    </Row>
  );
}
