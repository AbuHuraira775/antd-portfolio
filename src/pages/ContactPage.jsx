import { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    setLoading(true); // Start loading state

    try {
      await emailjs.send(
        "service_to4kszt",  // Replace with your EmailJS service ID
        "template_ok5qh29", // Replace with your EmailJS template ID
        {
          user_name: values.name,
          user_email: values.email,
          message: values.message,
        },
        "pnaxdeAlZ0NTm72cP" // Replace with your EmailJS public key
      );

      messageApi.open({
        type: 'success',
        content: 'Message is sent successfully',
      });
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: 'Message sending failed',
      });
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ maxWidth: "500px", margin: "auto", padding: "40px" }}
    >
      {contextHolder}
      <h2 style={{ marginBottom: "20px" }}>Contact Me</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
          <Input placeholder="Your Email" />
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: true, message: "Please enter your message" }]}>
          <Input.TextArea placeholder="Your Message" rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SendOutlined />} loading={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
};

export default Contact;
