import { Box, Text } from "@chakra-ui/react";
import AutoCarousel from "./ui/Carousel";

const Companies = () => {
  return (
    <Box>
      <Text
        textAlign="center"
        color="rgba(102, 112, 133, 1)"
        fontSize={{ base: "14px", mdToXl: "16px" }}
        fontWeight={500}
        fontFamily="Inter, sans-serif"
        pt="10px"
      >
        Join 4,000+ companies already growing
      </Text>
      <AutoCarousel></AutoCarousel>
    </Box>
  );
};

export default Companies;
