import { Box, Button, Text } from "@chakra-ui/react";

const HeroContent = () => {
  return (
    <Box textAlign="center" mt={10} gap="24px">
      <Box>
        <Text
          color=" rgba(113, 145, 255, 1)"
          //   fontWeight={700}
          fontWeight={{ mdToXl: "700" }}
          fontSize={{ mdToXl: "16px" }}
          fontFamily="Inter, sans-serif"
        >
          Leverage on Automation
        </Text>
        <Text
          color=" rgba(255, 255, 255, 1)"
          fontWeight={{ mdToXl: "600" }}
          fontSize={{ base: "60px", mdToXl: "76px" }}
          fontFamily="Inter, sans-serif"
          lineHeight={{ base: "70px", mdToXl: "82px" }}
        >
          AI Models for <br /> Business Solutions
        </Text>
      </Box>
      <Text
        color=" rgba(255, 255, 255, 1)"
        fontSize={{ base: "16px", mdToXl: "22px" }}
        fontWeight={500}
        fontFamily="Inter, sans-serif"
      >
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our <br />
        specialized models are designed to fit different business needs
      </Text>
      <Button
        bg="rgba(255, 255, 255, 1)"
        color=" rgba(5, 21, 44, 1)"
        mt={5}
        fontSize={{ base: "16px", mdToXl: "18px" }}
        fontFamily="Inter, sans-serif"
      >
        Get started Now
      </Button>
    </Box>
  );
};

export default HeroContent;
