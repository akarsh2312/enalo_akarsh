import React from "react";
import { Form, Input, Select, DatePicker, Button, Row, Col } from "antd";
import "antd/dist/reset.css";
import "./App.css"; // Assuming custom CSS is in App.css

const { Option } = Select;

const App = () => {
  const handleFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="container">
      <Row justify="center">
        <Col xs={24}>
          <Form
            layout="vertical"
            onFinish={handleFinish}
            className="form"
          >
            <h2 className="centralize">Contact Us</h2>
            <h1 className="centralize">Make an Appointment</h1>

            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Department"
              name="department"
              rules={[{ required: true, message: "Please select a department" }]}
            >
              <Select placeholder="Select department">
                <Option value="sales">Sales</Option>
                <Option value="support">Support</Option>
                <Option value="general">General Inquiry</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Time"
              name="time"
              rules={[{ required: true, message: "Please select a time" }]}
            >
              <DatePicker showTime format="YYYY-MM-DD HH:mm" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{ backgroundColor: "#1890ff", color: "#fff" }}>
                Book Appointment
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default App;

