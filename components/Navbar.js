import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Button, Form, Input, Checkbox } from 'antd';
import {
  loadUserProfile,
  setUserProfile,
  clearUserProfile,
} from '../utils/localStorage';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const { isLogin, userProfile } = loadUserProfile();
    setIsLogin(isLogin);
  }, []);

  const onLogout = () => {
    clearUserProfile();

    // update state
    setIsLogin(false);
    setUsername('');
  };

  const onFinish = (value) => {
    setUserProfile(value.username);

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
      {isLogin ? (
        <Button onClick={onLogout}>Logout</Button>
      ) : (
        <Button onClick={() => setVisible(true)}>Login</Button>
      )}
      {username}
    </>
  );
}

export default Navbar;
