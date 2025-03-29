import { Box } from "@chakra-ui/react";
import Hero from "../components/ui/Hero";
import Companies from "../components/Companies";
import AiModels from "../components/ui/ModelContent";
import AutoScrollingCarousel from "../components/ui/Cards";

const Home = () => {
  return (
    <Box bgColor="rgba(246, 250, 243, 1)">
      <Hero></Hero>
      <Companies></Companies>
      <AiModels></AiModels>
      <AutoScrollingCarousel></AutoScrollingCarousel>
    </Box>
  );
};

export default Home;
