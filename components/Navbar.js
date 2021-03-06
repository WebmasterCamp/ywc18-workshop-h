import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {
  Modal,
  Button,
  Form,
  Input,
  Checkbox,
  Row,
  Col,
  Typography,
} from 'antd';
import {
  loadLocalUserProfile,
  setLocalUserProfile,
  clearLocalUserProfile,
} from '../utils/localStorage';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const { isLogin, userProfile } = loadLocalUserProfile();
    setIsLogin(isLogin);
  }, []);

  const onLogout = () => {
    clearLocalUserProfile();

    // update state
    setIsLogin(false);
    setUsername('');
  };

  const onFinish = (value) => {
    setLocalUserProfile(value.username);

    // update state
    setUsername(value.username);
    setVisible(false);
    setIsLogin(true);
  };

  const router = useRouter();
  const linkToHome = () => {
    router.push('/');
  };

  return (
    <>
      <Modal
        visible={visible}
        title="Login"
        onCancel={() => setVisible(false)}
        footer={null}
        centered
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Row
        justify="space-between"
        align="center"
        style={{
          padding: '16px 20px',
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'saturate(180%) blur(20px)',
          boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 10px',
          position: 'fixed',
          width: '100%',
          zIndex: '9999',
        }}
      >
        <img
          src="/logo.png"
          alt="HOSPIN"
          style={{ width: 110, cursor: 'pointer' }}
          onClick={linkToHome}
        />
        <Col>
          {isLogin ? (
            <>
              <Link href="/history">
                <a style={{ color: '#32C5B2' }}>??????????????? ?????????????????????????????????</a>
              </Link>
              <Button onClick={onLogout} style={{ marginLeft: '30px' }}>
                ??????????????????????????????
              </Button>
            </>
          ) : (
            <Button onClick={() => setVisible(true)}>?????????????????????????????????</Button>
          )}
        </Col>
      </Row>
    </>
  );
}

export default Navbar;
