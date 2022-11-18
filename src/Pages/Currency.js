import MotionHoc from './MotionHoc'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Input } from 'antd';
import axios from 'axios'
import './MyStyle.css'

const Currency = () => {

  const[inputAmount,setinputAmount] = useState(0);
  const[inputCurrency,setinputCurrency] = useState('');
  const[outputCurrency,setoutputCurrency] = useState();
  const [open, setOpen] = useState(false);

  const covertCurrencyAPI = ()  => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "4W881b7aMYHSamXbdzz610rhSOkVsNpD");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${inputCurrency}&from=USD&amount=${inputAmount}`

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result["result"])
        setoutputCurrency(result["result"]);
        setOpen(true);
      })
      .catch(error => console.log('error', error));
  };

  const HandleConvert = () => {
    if(inputAmount != " " && inputCurrency != " "){
      covertCurrencyAPI();
    }
  }

  return (
    <div>
      <h1>Convert Currency API</h1>
      <div>
      <Modal
        title="Currency Converter API Result"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>You Entered {inputAmount} and Currency is {inputCurrency}</p>
        <p>Converted Amount is ${outputCurrency}</p>
      </Modal>
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Please input your amount!' }]}
      >
        <Input value={inputAmount} onChange={(e) => setinputAmount(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Currency"
        name="curreny"
        rules={[{ required: true, message: 'Please input your currenncy!' }]}
      >
        <Input value={inputCurrency} onChange={(e) => setinputCurrency(e.target.value)} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={()=>{HandleConvert()}}>
          Convert
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}

const currency = MotionHoc(Currency)

export default currency
