import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Row, Col, Typography } from 'antd';

import { blog } from '../../shared/blog.js';

export default function BlogPage() {
  const router = useRouter();
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(blog.filter((item) => item.id === parseInt(router?.query?.id)));
  }, [router]);

  return (
    <div>
      <Head>
        <title>บริการ | HOSPIN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row justify="center" align="middle" gutter={16}>
        <Col span={18} style={{ margin: '32px 0' }}>
          <Typography.Title level={2} align="center">
            บทความ
          </Typography.Title>
        </Col>
        <Col span={20} style={{ margin: '12px 0' }}>
          {content.map((item, i) => (
            <div key={i}>
              <Typography.Title
                level={3}
                align="center"
                style={{ marginBottom: 36 }}
              >
                {item.title}
              </Typography.Title>
              <Typography.Text align="left" color="secondary">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.fineprint,
                  }}
                ></div>
              </Typography.Text>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}
