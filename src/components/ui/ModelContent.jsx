import { Box, Text } from "@chakra-ui/react";

const AiModels = () => {
  return (
    <Box textAlign="center" mt={10} gap="24px">
      <Box>
        <Text
          color=" rgba(34, 38, 63, 1)"
          fontWeight={600}
          fontSize={{ base: "30px", mdToXl: "50px" }}
          fontFamily="Inter, sans-serif"
          lineHeight={{ base: "40px", mdToXl: "62px" }}
        >
          AI Models tailored for your <br /> business Solutions
        </Text>
      </Box>
      <Text
        color=" rgba(130, 130, 130, 1)"
        fontSize={{ base: "18px", mdToXl: "22px" }}
        fontWeight={500}
        fontFamily="Inter, sans-serif"
      >
        Leverage the power of AI to automate, analyze, and optimize your
        workflows. Our <br />
        specialized models are designed to fit different business needs
      </Text>
    </Box>
  );
};

export default AiModels;
