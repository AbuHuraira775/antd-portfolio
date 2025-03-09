import { Timeline, Typography, Row, Col } from "antd";
import { RocketOutlined, BookOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const educationData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Sindh Madressatul Islam, University",
    logo: "/images/smiu.png",
    website: "http://smiu.edu.pk/",
    date: "2021 - 2025 JAN",
    description: "Focused on software development, data structures, and web technologies."
  },
  {
    degree: "Intermediate in Pre Engineering",
    institution: "PECHS Education Degree Sceince College",
    logo: "images/pechs.jpeg",
    website: "https://www.facebook.com/pechs.edu.foundation/",
    date: "2017 - 2019",
    description: "Studied fundamental engineering concepts and mathematics."
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ padding: "50px 20px", maxWidth: "800px", margin: "auto" }}
    >
      {/* Section Heading */}
      <Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
        Experience
      </Title>

      {/* Timeline */}
      <Row justify="center">
        <Col xs={24} sm={20} md={18}>
          <Timeline mode="left" style={{ marginTop: "20px" }}>
            {educationData.map((exp, index) => (
              <Timeline.Item
                key={index}
                dot={<RocketOutlined style={{ fontSize: "18px", color: "#1890ff" }} />}
                color="blue"
              >
                <Title level={4} style={{ marginBottom: 0 }}>{exp.title}</Title>
                <Paragraph style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}>
                  <a href={exp.website} target="_blank" rel="noopener noreferrer" style={{ borderRadius:"50%", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "inherit" }}>
                    <img src={exp.logo} alt={exp.company} style={{ width: "24px", height: "24px" }} />
                    <strong>{exp.company}</strong>
                  </a>
                  • {exp.date}
                </Paragraph>
                <Paragraph style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
                  {exp.description}
                </Paragraph>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </motion.div>
  );
};

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ padding: "50px 20px", maxWidth: "800px", margin: "auto" }}
    >
      {/* Section Heading */}
      <Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
        Education
      </Title>

      {/* Timeline */}
      <Row justify="center">
        <Col xs={24} sm={20} md={18}>
          <Timeline mode="left" style={{ marginTop: "20px" }}>
            {educationData.map((edu, index) => (
              <Timeline.Item
                key={index}
                dot={<BookOutlined style={{ fontSize: "18px", color: "#1890ff" }} />}
                color="blue"
              >
                <Title level={4} style={{ marginBottom: 0 }}>{edu.degree}</Title>
                <Paragraph style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}>
                  <a href={edu.website} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "inherit" }}>
                    <img src={edu.logo} alt={edu.institution} style={{ width: "24px", height: "24px" }} />
                    <strong>{edu.institution}</strong>
                  </a>
                  • {edu.date}
                </Paragraph>
                <Paragraph style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
                  {edu.description}
                </Paragraph>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Education ;
