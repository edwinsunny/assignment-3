import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './MyStyle.css';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';

const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
  
      return;
    }
    if (user) navigate("/Home");
  }, [user, loading]);

  return (
    <div className='LoginForm'>
      <Form
        name='LoginForm'
        className='login-form'
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        initialValues={{
          remember: true
        }}
      >
        <Form.Item>
          
        </Form.Item>
        <Form.Item
          label='Email'
          name='email'
          style={{ color: 'white' }}
          rules={[
            {
              required: true,
              message: 'Please input your email!'
            }
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button
            className='login-form-button'
            type='primary'
            htmlType='submit'
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </Button>
          <Link to="/Registration">
          <Button
            className='login-form-button'
            type='primary'
            htmlType='submit'
          >
            Register
          </Button>
          </Link>
          
        </Form.Item>
      </Form>
    </div>
  )
};


export default LoginComponent;
