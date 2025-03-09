import { Card, Row, Col } from "antd";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", description: "A modern portfolio built with React." },
  { title: "E-Commerce App", description: "An online shopping app using MERN stack." },
];

const Projects = () => {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ padding: "50px" }}
    >
      <h2>My Projects</h2>
      <Row gutter={16} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card title={project.title}>{project.description}</Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Projects;
