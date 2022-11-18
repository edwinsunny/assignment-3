import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, Checkbox, Form, Input } from 'antd'
import 'antd/dist/antd.css'
import './MyStyle.css'

function Registration () {
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
      if (!name) alert("Please enter name");
      registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        // if (loading) return;
        // if (user) navigate("/Login");
      }, [user, loading]);
  return (
    <div className='RegistrationForm'>
      <Form
        name='RegistrationForm'
        className="Registration-Form"
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
      <h2>Registration</h2>
      </Form.Item>
      <Form.Item
          label='Name'
          name='name'
          style={{color:'white'}}
          rules={[
            {
              required: true,
              message: 'Please input your name!'
            }
          ]}
        >
        <Input value={name} onChange={(e) => setname(e.target.value)} />
        </Form.Item>
        <Form.Item
          label='Email'
          name='email'
          style={{color:'white'}}
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
        <Link to="/">
        <Button
          className='login-form-button'
          type='primary'
          htmlType='submit'
        >
          Login
        </Button>
        </Link>
          <Button className='login-form-button' type='primary' htmlType='submit' onClick={register} >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Registration;
