import { Box, Typography, Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/frente-asilo-transformed.png",
    title: "Transforme Vidas",
    description: "Apoie a nossa missão de cuidar de quem mais precisa.",
    primaryButton: "Saiba Mais",
    secondaryButton: "Doar Agora",
  },
  {
    image: "/fotoidosos.jpg",
    title: "Cuidados Humanizados",
    description: "Oferecemos cuidado e acolhimento com amor e dedicação.",
    primaryButton: "Saiba Mais",
    secondaryButton: "Doar Agora",
  },
  {
    image: "/fotoqualidademelhorada.png",
    title: "Juntos Somos Mais Fortes",
    description: "Ajude a construir um futuro melhor para nossos idosos.",
    primaryButton: "Saiba Mais",
    secondaryButton: "Doar Agora",
  },
];

const Banner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        ".swiper-pagination-bullet": {
          backgroundColor: theme.palette.secondary.main,
        },
        ".swiper-button-next, .swiper-button-prev": {
          color: theme.palette.secondary.main,
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
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
                height: "70vh",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {/* Imagem de fundo */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
              />

              {/* Sobreposição preta transparente */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 2,
                }}
              />

              <Container
                sx={{
                  position: "relative",
                  zIndex: 3,
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "16px",
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
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
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  component={Link}
                  to="/about"
                >
                  <Button variant="contained" size="large" color="primary">
                    {slide.primaryButton}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      "&:hover": {
                        borderColor: "rgba(255, 255, 255, 0.7)",
                      },
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    component={Link}
                    to="/donations"
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
