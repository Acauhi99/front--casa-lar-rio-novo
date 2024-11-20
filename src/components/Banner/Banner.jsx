import { Box, Typography, Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTheme } from "@mui/material/styles";

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
                height: "70vh",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
              <Container
                sx={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "16px",
                    color: theme.palette.primary.main,
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "32px",
                    color: theme.palette.secondary.main,
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
                    sx={{}}
                  >
                    {slide.primaryButton}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,

                      "&:hover": {
                        borderColor: theme.palette.secondary.main,
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
