import { useState } from "react";
import { Row, Col, Button, Typography, Input, Segmented } from "antd";
import { motion } from "framer-motion";
import { GithubOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const allProjects = [
  {
    title: "Travel Agency Back Office Management System",
    description: "Developed a React-based back-office system for a travel agency, enabling management of tour packages, vehicle maintenance, scheduled & custom tours. Integrated dynamic pricing with discount application for seamless cost adjustments.",
    category: "Frontend",
    image: "https://i.pinimg.com/474x/1b/d3/ee/1bd3ee5ab1346365e8bb01e5faa48146.jpg",
    // github: "https://github.com/yourusername/travel-agency-backoffice",
    // live: "https://travel-agency-dashboard.vercel.app/"
},
{
  title: "FYP Management System",
  description: "Designed the UI/UX in Figma for an FYP Management System built using PHP and Laravel. Focused on creating an intuitive and seamless user experience for project tracking, student evaluations.",
  category: "Frontend",
  image: "/images/fyp-management.png",
  figma: "https://www.figma.com/your-figma-link"
},

  {
    title: "E-commerce Web",
    description: "Built a dynamic e-commerce platform using React, Redux Toolkit, and React Router, featuring protected routes for secure access. Designed a responsive UI with Ant Design, ensuring seamless navigation and a smooth user experience",
    category: "Frontend",
    image: "/images/ecommerce.png",
    github: "https://github.com/AbuHuraira775/ecommerce",
    live: "https://ecommerce-eight-zeta-64.vercel.app/",
  },
  {
    title: "Image editor",
    description: "Built a responsive image editor using HTML, CSS, and JavaScript, leveraging CSS properties for real-time image adjustments like brightness, contrast, and filters. Designed an intuitive UI with smooth controls, ensuring seamless user interaction across all devices.",
    category: "Frontend",
    image: "/images/imageeditor.png",
    github: "https://github.com/yourgithub/ecommerce",
    live: "https://abuhuraira775.github.io/image-editor/",
  },
  // {
  //   title: "Weather App",
  //   description: "Developed a weather application using HTML, CSS, and JavaScript, integrating Axios to fetch real-time weather data from a public API. The app displays temperature, humidity, and weather conditions based on user input, ensuring a smooth and responsive UI",
  //   category: "Frontend",
  //   image: "https://i.pinimg.com/474x/6c/15/b8/6c15b8e0949440796467c5ea08eee097.jpg",
  //   github: "https://github.com/yourgithub/weather-app",
  //   live: "https://your-weather-app.com",
  // },
  // {
  //   title: "Landings page",
  //   description: "Created a responsive landing page using HTML and CSS, featuring a sleek UI and smooth navigation for an engaging user experience",
  //   category: "Frontend",
  //   image: "images/landingpage.png",
  //   github: "https://github.com/AbuHuraira775/landingpage",
  //   live: "https://landingpage-rho-henna.vercel.app/",
  // },
  {
    title: "Pakistani Products",
    description: "Developed a backend project to promote the boycott of Israeli products. Suggested Pakistani alternatives to encourage ethical consumer choices and social awareness. ViewProject",
    category: "Backend",
    image: "images/palestine.png",
    github: "https://github.com/AbuHuraira775/palestine",
    live: "https://github.com/AbuHuraira775/palestine",
  },
  {
    title: "Game Score Posting",
    description: "Built a JWT-authenticated MERN app with protected routes, using React Router for navigation, Node.js & Express for backend logic, and MongoDB for user data storage.",
    category: "Fullstack",
    image: "images/game.png",
    github: "https://github.com/AbuHuraira775/Y-Game",
    live: "https://github.com/AbuHuraira775/Y-Game",
  },
  // {
  //   title: "Book Inventory",
  //   description: "Developed a Book Inventory System using the MENR (MongoDB, Express.js, Node.js, React) stack. This system allows users to add, update, delete, and search books in a centralized database. It features a secure authentication system using JWT and role-based access control (admin/user).",
  //   category: "Fullstack",
  //   image: "images/book.png",
  //   github: "https://github.com/AbuHuraira775/book-inventory/tree/main/MERN%20BOOK%20PROJECT",
  //   live: "https://github.com/AbuHuraira775/book-inventory",
  // }
];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = allProjects.filter((project) => {
    return (
      (selectedCategory === "All" || project.category === selectedCategory) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: "50px 20px",
        textAlign: "center",
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      <Title level={2} style={{ fontWeight: "bold", marginBottom: "30px" }}>My Projects</Title>

      {/* Search and Filter Section */}
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <Input
          placeholder="Search projects..."
          prefix={<SearchOutlined />}
          allowClear
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "300px" }}
        />
        <Segmented
          options={["All", "Frontend", "Backend", "Fullstack"]}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <Row gutter={[24, 24]} justify="center">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <div
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "#fff",
                  }}
                >
                  {/* Project Image with Overlay */}
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.4)", // Opacity Effect
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {project.title}
                    </div>
                  </div>

                  {/* Project Description & Links */}
                  <div style={{ padding: "15px", textAlign: "left" }}>
                    <Paragraph style={{ fontSize: "13px", lineHeight: "1.6", color: "#777" }}>
                      {project.description}
                    </Paragraph>

                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                      {project.title === "E-commerce Web" ? (
                        <Button type="default" disabled>
                          In Progress
                        </Button>
                      ) : (
                        <>
                          <Button icon={<GithubOutlined />} href={ project.github} target="_blank">
                            GitHub
                          </Button>

                          <Button type="primary" icon={<EyeOutlined />} href={project.live} target="_blank">
                            Live Preview
                          </Button>
                        </>
                      )}
                    </div>


                  </div>
                </div>
              </motion.div>
            </Col>
          ))
        ) : (
          <Title level={4} style={{ marginTop: "20px", color: "#888" }}>
            No projects found.
          </Title>
        )}
      </Row>
    </motion.div>
  );
};

export default ProjectsPage;
