"use client"
import React from 'react';
import * as Form from '@radix-ui/react-form';

const FormDemo = () => (
  <Form.Root className="w-[260px]">
    <Form.Field className="grid mb-[10px]" name="fullname">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white text-black">Full Name</Form.Label>
        <Form.Message className="text-[13px] dark:text-white text-black opacity-[0.8]" match="valueMissing">
          Please enter your full name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="phone">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white text-black">Phone Number</Form.Label>
        <Form.Message className="text-[13px] dark:text-white text-black opacity-[0.8]" match="valueMissing">
          Please enter your phone number
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white text-black">Email</Form.Label>
        <Form.Message className="text-[13px] dark:text-white text-black opacity-[0.8]" match="valueMissing">
          Please enter your email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="address">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white text-black">Address</Form.Label>
        <Form.Message className="text-[13px] dark:text-white text-black opacity-[0.8]" match="valueMissing">
          Please enter your address
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="jobtitle">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white text-black">Job Title</Form.Label>
        <Form.Message className="text-[13px] dark:text-white text-black opacity-[0.8]" match="valueMissing">
          Please enter your job title
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-black dark:bg-white shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="text"
          required
        />
      </Form.Control>
    </Form.Field>
    
    {/* <Form.Submit asChild>
      <button className="box-border w-full bg-black dark:bg-white shadow-black text-black dark:text-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        Post question
      </button>
    </Form.Submit> */}
  </Form.Root>
);

export default FormDemo;