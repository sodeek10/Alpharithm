import { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const AutoScrollingCarousel = () => {
  const items = [
    {
      id: 1,
      title: "Market Prediction",
      description:
        "Use AI insights for smarter business decisions and stay competitive.",
      image:
        "https://res.cloudinary.com/dplxcadqt/image/upload/v1743165769/Frame_1984078106_rq2lch.png",
    },
    {
      id: 2,
      title: "Finance",
      description:
        "Our AI models analyze financial data for confident investments.",
      image:
        "https://res.cloudinary.com/dplxcadqt/image/upload/v1743165828/Frame_1984078106_1_mdmsdy.png",
    },
    {
      id: 3,
      title: "Data Analytics",
      description:
        "Transform data into insights with AI analytics that enhance decisions.",
      image:
        "https://res.cloudinary.com/dplxcadqt/image/upload/v1743165882/Frame_1984078106_2_tr1mqb.png",
    },
    {
      id: 4,
      title: "Content Generation",
      description:
        "Create quality content easily with AI that knows your brand and audience.",
      image:
        "https://res.cloudinary.com/dplxcadqt/image/upload/v1743165926/Frame_1984078106_3_mws4am.png",
    },
    {
      id: 5,
      title: "Customer Support",
      description:
        "Use AI chatbots for instant, personalized customer support.",
      image:
        "https://res.cloudinary.com/dplxcadqt/image/upload/v1743165983/Frame_1984078106_4_utznsx.png",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const titlesRef = useRef(null);
  const cardsRef = useRef(null);
  const intervalRef = useRef(null);
  const cardWidth = 700; // Width of each card including margin

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setScrollPosition((prev) => {
          const maxScroll = (items.length - 1) * cardWidth;
          return prev >= maxScroll ? 0 : prev + cardWidth;
        });
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovering, items.length, cardWidth]);

  // Sync scroll positions
  useEffect(() => {
    if (titlesRef.current && cardsRef.current) {
      titlesRef.current.scrollLeft = scrollPosition;
      cardsRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  // Handle manual navigation
  const scrollToItem = (index) => {
    clearInterval(intervalRef.current);
    setScrollPosition(index * cardWidth);
  };

  return (
    <div className="carousel-containers">
      {/* Scrollable Title Bar */}
      <div
        className="titles-scroll-container"
        ref={titlesRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="titles-wrapper">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`title-box ${
                Math.round(scrollPosition / cardWidth) === index ? "active" : ""
              }`}
              onClick={() => scrollToItem(index)}
              onMouseEnter={() => {
                setIsHovering(true);
                scrollToItem(index);
              }}
            >
              <Text
                fontWeight={600}
                fontSize="16px"
                fontFamily="Inter, sans-serif"
                _hover={{ color: "white" }}
              >
                {item.title}
              </Text>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Cards Container */}
      <div
        className="cards-scroll-container"
        ref={cardsRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Box className="cards-wrapper" gap={{ base: "2%", mdToXl: "5%" }}>
          {items.map((item, index) => (
            <Flex
              key={item.id}
              className={`card ${
                Math.round(scrollPosition / cardWidth) === index ? "active" : ""
              }`}
              onClick={() => scrollToItem(index)}
              gap={{ base: "2", mdToXl: "10" }}
              display={{ base: "flex", mdToXl: "flex" }}
              flexDirection={{ base: "column-reverse", mdToXl: "row" }}
              pb={10}
            >
              <Box pt={10}>
                <Text
                  fontWeight={500}
                  color="rgba(130, 130, 130, 1)"
                  fontSize={{ base: "17px", mdToXl: "19.5px" }}
                  fontFamily="Inter, sans-serif"
                >
                  {item.title}
                </Text>
                <Text
                  fontWeight={600}
                  fontSize={{ base: "27px", mdToXl: "30.9px" }}
                  color="rgba(34, 38, 63, 1)"
                  fontFamily="Inter, sans-serif"
                >
                  {item.description}
                </Text>
                <Button
                  bgColor="rgba(3, 33, 127, 1)"
                  fontFamily="Inter, sans-serif"
                  color="rgba(246, 250, 243, 1)"
                >
                  Learn More
                </Button>
              </Box>
              <Image
                src={item.image}
                alt={item.title}
                width={{ base: "80%", mdToXl: "50%" }}
              />
            </Flex>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default AutoScrollingCarousel;
