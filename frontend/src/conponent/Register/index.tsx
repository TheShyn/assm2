import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    password: '${label} is not a valid password!',
    rePassword: '${label} is not a valid re-password!'
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

const Regis = () => {
  return (
    <div className="pb-24 mt-16">
      <div className="container">

        <div className="grid grid-cols-12 gap-x-5 mt-60">
          <div className="col-span-12">
            <div id="maintab">
              <ul className="custom-tab-nav flex flex-wrap items-center justify-center tw-mb-10">
                <li className="mx-2"><a className="font-semibold py-3 px-5 leading-none uppercase transition-all hover:text-orange  text-base md:text-md" href="login">login</a> <span className="inline-block ml-2">|</span></li>
                <li className="mx-2"><a className="font-semibold py-3 px-5 leading-none uppercase transition-all hover:text-orange  text-base md:text-md" href="register">register</a></li>
              </ul>

              <div>
                <div id="register" className="custom-tab-content">
                  <div className="p-8 md:p-20 shadow max-w-4xl mx-auto">
                    <Form
                      {...layout}
                      name="nest-messages"
                      onFinish={onFinish}
                      style={{ maxWidth: 600 }}
                      validateMessages={validateMessages}
                    >
                      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                      </Form.Item>
                      {/* <Form.Item name={['user', 'password']} label="Age" rules={[{ type: 'password' }]}>
                        <InputNumber />
                      </Form.Item> */}

                      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>

                  </div>


                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regis