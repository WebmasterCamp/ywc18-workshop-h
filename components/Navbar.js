import { useState, useEffect } from 'react';
import styled from 'styled-components';
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

const { Title } = Typography;

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
          backgroundColor: '#fff',
          boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 10px',
        }}
      >
        <img src="/logo.png" alt="HOSPIN" style={{ width: 110 }} />
        <Col>
          {isLogin ? (
            <Button onClick={onLogout}>Logout</Button>
          ) : (
            <Button onClick={() => setVisible(true)}>Login</Button>
          )}
          {username}
        </Col>
      </Row>
    </>
  );
}

export default Navbar;
