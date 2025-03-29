import { useRef, useEffect } from "react";
import "./Carousel.css";
import { Flex, Text } from "@chakra-ui/react";

// Sample data array containing images and text
const carouselItems = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dplxcadqt/image/upload/v1743159321/Logomark_x14uji.png",
    title: "Layers",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dplxcadqt/image/upload/v1743159410/Logomark_1_ulprzi.png",
    title: "Sisyphus",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dplxcadqt/image/upload/v1743159451/Logomark_2_s1gqze.png",
    title: "Circooles",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dplxcadqt/image/upload/v1743159750/Logomark_3_h6zevn.png",
    title: "Catalog",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dplxcadqt/image/upload/v1743159781/Logomark_4_edxd6x.png",
    title: "Quotient",
  },
];

const AutoCarousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentIndex = 0;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!carousel || !carousel.children[0]) return;

        currentIndex = (currentIndex + 1) % carouselItems.length;
        carousel.scrollTo({
          left: currentIndex * carousel.children[0].offsetWidth,
          behavior: "smooth",
        });
      }, 3000); // Change slide every 3 seconds
    };

    startAutoScroll();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="auto-carousel" ref={carouselRef}>
        {carouselItems.map((item) => (
          <Flex
            gap="4"
            className="carousel-item"
            key={item.id}
            width={{ base: "40%", smToMd: "25%", lgTo2xl: "20%" }}
          >
            <img src={item.image} alt={item.title} />
            <div className="carousel-content">
              <Text
                color=" rgba(16, 24, 40, 1)"
                fontSize={{ base: "22px", mdToXl: "28px" }}
                fontWeight={700}
              >
                {item.title}
              </Text>
            </div>
          </Flex>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
