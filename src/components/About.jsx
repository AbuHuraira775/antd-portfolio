import { Typography, Row, Col, Divider } from "antd";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "../pages/ContactPage";

const { Title, Paragraph } = Typography;

const paragraphStyle = { fontSize: "16px", lineHeight: "1.6", color: "#666" };

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          padding: "50px 20px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {/* About Me Heading */}
        <Title level={1} style={{ textAlign: "center", fontWeight: "bold" }}>
          About Me
        </Title>

        {/* Two-Column Layout */}
        <Row gutter={[32, 32]} align="middle" justify="center" style={{ marginTop: "20px" }}>
          {/* Left Column - Introduction */}
          <Col xs={24} md={12}>
            <Title level={4}>Who Am I?</Title>
            <Paragraph style={paragraphStyle}>
              I am a <strong>MERN Stack Developer</strong> passionate about building
              high-performance, user-friendly web applications. With experience
              in <strong>React, Node.js, Express.js, and MongoDB</strong>, I focus on
              delivering <strong>scalable and efficient</strong> solutions.
            </Paragraph>

            <Paragraph style={paragraphStyle}>
              I thrive in collaborative environments, working alongside
              developers to create seamless and intuitive web experiences. I am
              always eager to learn and explore new technologies to improve my
              skill set.
            </Paragraph>
          </Col>

          {/* Right Column - Skills & Focus Areas */}
          <Col xs={24} md={12}>
            <Title level={4}>What I Do</Title>
            <Paragraph style={paragraphStyle}>✔ Full-Stack Web Development (MERN Stack)</Paragraph>
            <Paragraph style={paragraphStyle}>✔ Frontend Development with React</Paragraph>
            <Paragraph style={paragraphStyle}>✔ Backend API Development with Node.js & Express</Paragraph>
            <Paragraph style={paragraphStyle}>✔ Database Management using MongoDB</Paragraph>
            <Paragraph style={paragraphStyle}>✔ Authentication & Security Implementation</Paragraph>
          </Col>
        </Row>

        <Divider />
        <Skills />
        <Experience />
      <Education />

      <Contact />
      </motion.div>
    </>
  );
};

export default About;
