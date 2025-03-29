import { Box, Button, Flex, HStack, Image, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      pl={{ smToMd: "2", lgTo2xl: "10" }}
      pt={5}
      pr={{ smToMd: "2", lgTo2xl: "10" }}
      hideBelow="sm"
    >
      <Image src="https://res.cloudinary.com/dplxcadqt/image/upload/v1743151419/Content_oypngx.png" />
      <Flex gap={4}>
        <Link
          href="#"
          color=" rgba(255, 255, 255, 1)"
          fontWeight={500}
          fontSize="16px"
          fontFamily="Inter, sans-serif"
          textDecoration="none"
        >
          Models
        </Link>
        <Link
          href="#"
          color=" rgba(255, 255, 255, 1)"
          fontWeight={500}
          fontSize="16px"
          fontFamily="Inter, sans-serif"
          textDecoration="none"
        >
          Pricing
        </Link>
        <Link
          href="#"
          color=" rgba(255, 255, 255, 1)"
          fontWeight={500}
          fontSize="16px"
          fontFamily="Inter, sans-serif"
          textDecoration="none"
        >
          About Us
        </Link>
        <Link
          href="#"
          color=" rgba(255, 255, 255, 1)"
          fontWeight={500}
          fontSize="16px"
          fontFamily="Inter, sans-serif"
          textDecoration="none"
        >
          Contact Us
        </Link>
        <Link
          href="#"
          color=" rgba(255, 255, 255, 1)"
          fontWeight={500}
          fontSize="16px"
          fontFamily="Inter, sans-serif"
          textDecoration="none"
        >
          Custom Models
        </Link>
      </Flex>
      <Box>
        <HStack>
          <Button
            bg=" rgba(3, 6, 29, 1)"
            border="1px solid rgba(255, 255, 255, 1)"
            color=" rgba(255, 255, 255, 1)"
            fontWeight={500}
            fontSize="14px"
            fontFamily="Inter, sans-serif"
            variant="outline"
          >
            Login
          </Button>
          <Button
            bg=" rgba(255, 255, 255, 1)"
            variant="solid"
            color=" rgba(3, 6, 29, 1)"
            fontWeight={500}
            fontSize="14px"
            fontFamily="Inter, sans-serif"
          >
            Get Started Now
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
