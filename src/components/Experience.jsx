import { Timeline, Typography, Row, Col } from "antd";
import { motion } from "framer-motion";
import { RocketOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const experienceData = [
  {
    title: "Fullstack Developer",
    company: "Hakam TecSol",
    logo: "data:image/jpeg;base64,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",
    website: "https://www.linkedin.com/company/hakamtechsol/posts/?feedView=all",
    date: "2025 JAN - Present",
    description: "Built scalable, user-friendly React apps with secure authentication using Node.js, Express, and JWT. Managed backend data with MongoDB in a MERN stack, collaborating in Agile teams to deliver high-quality solutions",
  },
  {
    title: "Frontend Developer ",
    company: " Interns Pakistan",
    logo: "/images/internpakistan.png",
    website: "https://interns.pk/",
    date: " JUNE 2021 - JULY 2021",
    description: "Enhanced frontend skills with HTML, CSS, Bootstrap, and PHP while ensuring timely task submissions and earning performance-based badges",
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
            {experienceData.map((exp, index) => (
              <Timeline.Item
                key={index}
                dot={<RocketOutlined style={{ fontSize: "18px", color: "#1890ff" }} />}
                color="blue"
              >
                <Title level={4} style={{ marginBottom: 0 }}>{exp.title}</Title>
                <Paragraph style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}>
                  <a href={exp.website} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "inherit" }}>
                    <img src={exp.logo} alt={exp.company} style={{ width: "24px", height: "24px", borderRadius:"50%" }} />
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

export default Experience;
