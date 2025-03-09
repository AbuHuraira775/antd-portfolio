import { Layout, Space, Row, Col, Divider } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined, WhatsAppOutlined } from "@ant-design/icons";

const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer style={{ textAlign: "center", background: "#f9f9f9", color: "#333", padding: "30px 20px", minHeight: "20vh" }}>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <GithubOutlined style={{ fontSize: "20px", color: "#333" }} />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined style={{ fontSize: "20px", color: "#0077b5" }} />
        </a>
        <a href="mailto:abuhurairah775@gmail.com">
          <MailOutlined style={{ fontSize: "20px", color: "#c71610" }} />
        </a>
        <a href="https://wa.me/03132680481" target="_blank" rel="noopener noreferrer">
          <WhatsAppOutlined style={{ fontSize: "20px", color: "#25D366" }} />
        </a>
      </div>
      <Divider style={{ margin: "20px 0" }} />
      <p style={{ fontSize: "14px", marginBottom: "15px" }}>© {new Date().getFullYear()} Abu Hurairah. All Rights Reserved.</p>
    </Footer>
  );
};

export default MyFooter;
