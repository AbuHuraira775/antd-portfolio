import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(!visible);
  const closeDrawer = () => setVisible(!visible);

  return (
    <>
      {/* Desktop Menu */}
      <div className="navbar-container">
        <Menu
          mode="horizontal"
          theme="light"
          className="desktop-menu"
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="projects">
            <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </div>

      {/* Mobile Menu Button */}
      <Button className="mobile-menu-button" default icon={<MenuOutlined />} onClick={showDrawer} />

      {/* Mobile Menu Drawer */}
      <Drawer title="Menu" placement="left" onClose={closeDrawer} open={visible}>
        <Menu mode="vertical" onClick={closeDrawer}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="projects">
            <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Drawer>

      {/* CSS for Responsiveness */}
      <style>
        {`
          /* Navbar Container */
          .navbar-container {
            position: sticky;
            top: 0;
            width: 100%;
            background: white;
            z-index: 1000;
            display: flex;
            justify-content: center;
            padding: 0 20px;
            box-shadow: 0px 1px 10px  rgba(0, 0, 0, 0.05);
          }

          /* Desktop Menu */
          .desktop-menu {
            display: flex;
            width: 100%;
            max-width: 800px; /* Adjust this if needed */
            justify-content: center;
          }

          /* Mobile Menu Button */
          .mobile-menu-button {
            display: none;
            position: fixed;
            top: 15px;
            right: 15px;
            z-index: 1100;
          }

          /* Mobile View */
          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }
            .mobile-menu-button {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
