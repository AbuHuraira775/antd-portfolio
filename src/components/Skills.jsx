import { Button, Row, Col, Typography, Tooltip } from "antd";
import {
  SiReact, SiRedux, SiNodedotjs, SiExpress,
  SiMongodb, SiPostman, SiGithub, SiAntdesign, SiJavascript,
  SiHtml5, SiCss3, SiBootstrap, SiMysql, SiC, SiReactrouter, SiAxios
} from "react-icons/si";
import { useState } from "react";

const { Title } = Typography;

const skills = [
  { name: "React", icon: <SiReact />, color: "#61DAFB", category: "Frontend", tooltip: "A JavaScript library for building user interfaces." },
  { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC", category: "Frontend", tooltip: "State management tool for React applications." },
  { name: "React Router", icon: <SiReactrouter />, color: "#CA4245", category: "Frontend", tooltip: "Declarative routing for React applications." },
  { name: "Axios", icon: <SiAxios />, color: "#5A29E4", category: "Frontend", tooltip: "Promise-based HTTP client for JavaScript." },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", category: "Basic", tooltip: "Markup language for structuring web pages." },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6", category: "Basic", tooltip: "Style sheet language for designing web pages." },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", category: "Basic", tooltip: "Popular front-end framework for responsive design." },
  { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "#F7DF1E", category: "Basic", tooltip: "A versatile programming language for web development." },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#83CD29", category: "Backend", tooltip: "JavaScript runtime for building server-side applications." },
  { name: "Express", icon: <SiExpress />, color: "#000000", category: "Backend", tooltip: "Minimalist web framework for Node.js." },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "Backend", tooltip: "NoSQL database for storing JSON-like documents." },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "Backend", tooltip: "Basic knowledge of database management and SQL queries." },
  { name: "RESTful API", icon: <SiPostman />, color: "#FF6C37", category: "Backend", tooltip: "Architectural style for designing networked applications." },
  { name: "C Language", icon: <SiC />, color: "#A8B9CC", category: "Basic", tooltip: "Basic understanding of C programming and its fundamentals." },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37", category: "Tools", tooltip: "API testing and development tool." },
  { name: "GitHub", icon: <SiGithub />, color: "#181717", category: "Tools", tooltip: "Version control and collaboration platform." },
  // { name: "Ant Design", icon: <SiAntdesign />, color: "#0170FE", category: "Tools", tooltip: "Design system for enterprise applications." }
];

const Skills = () => {
  return (
    <div style={{ width: "100%", textAlign: "start", padding: "20px" }}>
      {['Basic', 'Frontend', 'Backend', 'Tools'].map(category => (
        <div key={category}>
          <Title level={1} style={{ fontWeight: "bolder", marginTop: "20px" }}>{category}</Title>
          <Row gutter={[16, 16]} justify="start">
            {skills.filter(skill => skill.category === category).map((skill, index) => (
              <Col key={index}>
                <Tooltip title={skill.tooltip}>
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "gray",
                      borderColor: "gray",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = skill.color;
                      e.currentTarget.style.borderColor = skill.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "gray";
                      e.currentTarget.style.borderColor = "gray";
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{skill.icon}</span>
                    {skill.name}
                  </Button>
                </Tooltip>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Skills;