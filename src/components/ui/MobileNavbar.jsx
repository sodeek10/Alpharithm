import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box className="navbar" sm={{ display: "none" }}>
      <Image src="https://res.cloudinary.com/dplxcadqt/image/upload/v1743151419/Content_oypngx.png" />

      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#model" className="menu-item">
          Model
        </a>
        <a href="#pricing" className="menu-item">
          Pricing
        </a>
        <a href="#about" className="menu-item">
          About Us
        </a>
        <a href="#contact" className="menu-item">
          Contact Us
        </a>
        <a href="#custom" className="menu-item">
          Custom Modes
        </a>
      </div>
    </Box>
  );
};

export default Navbar;
