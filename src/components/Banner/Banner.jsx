import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"; // Arrumando erro de commit
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const slides = [
  {
    image: "/foto1.jpg",
    title: "Transforme Vidas",
    description: "Apoie a nossa missão de cuidar de quem mais precisa.",
    primaryButton: "Saiba Mais",
    secondaryButton: "Doar Agora",
  },
  {
    image: "/foto1.jpg",
    title: "Cuidados Humanizados",
    description: "Oferecemos cuidado e acolhimento com amor e dedicação.",
    primaryButton: "Nossos Serviços",
    secondaryButton: "Doar Agora",
  },
  {
    image: "/foto1.jpg",
    title: "Juntos Somos Mais Fortes",
    description: "Ajude a construir um futuro melhor para nossos idosos.",
    primaryButton: "Conheça Mais",
    secondaryButton: "Doar Agora",
  },
];

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        simulateTouch={true} 
        grabCursor={true}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "90vh",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Container>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                    marginBottom: "16px",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
                    marginBottom: "32px",
                  }}
                >
                  {slide.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    sx={{
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {slide.primaryButton}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                      "&:hover": {
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    {slide.secondaryButton}
                  </Button>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
