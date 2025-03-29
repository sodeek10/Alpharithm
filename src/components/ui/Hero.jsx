import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import MobileNavbar from "./MobileNavbar";

const Hero = () => {
  return (
    <Box bg="rgba(4, 20, 43, 1)" pb={20}>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <HeroContent></HeroContent>
    </Box>
  );
};

export default Hero;
