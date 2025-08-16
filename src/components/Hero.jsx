import { Button, Row, Col, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import { GithubOutlined, LinkedinOutlined, DownloadOutlined } from "@ant-design/icons";
import "./Hero.css"; // Import CSS for styling and responsiveness
import profileImage from '/images/profile.jpg'
const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        padding: "50px 20px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row
        gutter={[32, 32]}
        align="middle"
        justify="center"
        style={{ maxWidth: "1100px", width: "100%" }}
      >
        {/* Left Column - Image */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <img
            src={profileImage}
            // src="https://i.pinimg.com/736x/75/b5/2a/75b52a1d81e6a976ad994c5d9a117674.jpg"
            alt="Profile"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "40px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        </Col>

        {/* Right Column - Name, Description, and Buttons */}
        <Col xs={24} md={12} style={{ textAlign: "left" }}>
          <Title level={1} style={{ textAlign: "start", fontWeight: "bolder" }} className="animated-name">Abu Huraira</Title>
          <Title level={4} style={{ color: "#333" }}>MERN Stack Developer</Title>
          <Paragraph style={{ fontSize: "16px", color: "#555" }}>
            <strong>MERN:</strong> MongoDB, Express.js, React, Node.js
          </Paragraph>
          <Paragraph style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
            Passionate web developer with hands-on experience in building 
            responsive, user-friendly web applications. Currently interning 
            as a MERN Stack Developer, focusing on secure authentication 
            systems and scalable backend solutions. Excited to contribute 
            to real-world projects and collaborate in a dynamic environment.
          </Paragraph>

          <Divider />

          <Title level={4}>Connect with Me</Title>

          <div className="button-container" >
            <Button type="default" style={{margin:'0 10px 10px 0'}} icon={<GithubOutlined />} href="https://github.com/AbuHuraira775/" target="_blank">
              GitHub
            </Button>
            <Button type="default" style={{margin:'0 10px 10px 0'}} icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/abu-huraira-a9828922a/" target="_blank">
              LinkedIn
            </Button>
            <Button type="default" style={{margin:'0 10px 10px 0'}} icon={<DownloadOutlined />} href="/resume/resume.pdf" download="Abu Huraira - Graduate'25">
              Resume
            </Button>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Hero;
