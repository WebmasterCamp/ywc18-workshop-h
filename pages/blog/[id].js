import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Row, Col, Typography } from 'antd';

export default function BlogPage() {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <div>
      <Head>
        <title>บริการ | HOSPIN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row justify="center" align="middle" gutter={16}>
        <Col span={18} style={{ margin: '32px 0' }}>
          <Typography.Title level={3} align="center">
            บทความ
          </Typography.Title>
        </Col>
      </Row>
    </div>
  );
}
