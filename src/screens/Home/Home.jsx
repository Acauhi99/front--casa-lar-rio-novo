import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  styled,
  Button,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import PropTypes from "prop-types";
import Banner from "../../components/Banner/Banner";

const StyledCard = styled(Card)(() => ({
  textAlign: "left",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  transition: "transform 0.3s, box-shadow 0.3s",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
  },
}));

const StyledIcon = styled("span")(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: "2.5rem",
    color: theme.palette.primary.main,
    marginBottom: "16px",
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontSize: "1.25rem",
  marginBottom: "8px",
}));

const CardText = styled(Typography)(() => ({
  color: "#616161",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  transition: "all 0.3s ease-in-out",
}));

const CardComponent = ({ icon, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledCard>
      <CardContent
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <StyledIcon>{icon}</StyledIcon>
        <CardTitle variant="h6">{title}</CardTitle>
        <Box sx={{ position: "relative", flex: 1 }}>
          <CardText
            variant="body2"
            sx={{
              WebkitLineClamp: expanded ? "unset" : 4,
            }}
          >
            {description}
          </CardText>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              position: "relative",
            }}
          >
            <Button
              color="primary"
              onClick={() => setExpanded(!expanded)}
              variant="outlined"
              size="small"
            >
              {expanded ? "Ler menos" : "Ler mais"}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

CardComponent.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const Home = () => {
  const cards = [
    {
      icon: <CheckCircleIcon />,
      title: "Atendimento Humanizado",
      description: `Ao longo de mais de um século de história, a Casa Lar tem se
      dedicado a oferecer um atendimento humanizado, garantindo
      cuidado e acolhimento integral a cada residente. Nosso
      compromisso vai além da assistência física, priorizando também o
      bem-estar emocional e social dos idosos, sempre respeitando suas
      histórias e singularidades. Acreditamos que cada pessoa merece
      envelhecer com dignidade e carinho, e trabalhamos para que todos
      sintam-se em um verdadeiro lar.`,
    },
    {
      icon: <FavoriteIcon />,
      title: "Infraestrutura Dedicada",
      description: `Ao longo de sua história, a Casa Lar tem buscado oferecer um
      ambiente seguro e acolhedor para todos os residentes. Com
      instalações adaptadas, a instituição garante acessibilidade e
      conforto, promovendo a autonomia dos idosos. Além disso,
      contamos com áreas comuns que incentivam o convívio e a
      socialização, proporcionando um verdadeiro lar onde todos se
      sentem bem-vindos.`,
    },
    {
      icon: <GroupIcon />,
      title: "Programas de Inclusão",
      description: `Acreditamos que o envelhecimento saudável envolve laços sociais
      e interação com a comunidade. Em nossos programas de inclusão,
      realizamos atividades integrativas, como nossa tradicional Festa
      Junina e festividades de fim de ano, que são muito esperadas
      pelos residentes. Esses eventos fortalecem o sentimento de
      pertencimento e promovem o resgate da autoestima dos nossos
      idosos, conectando-os com as pessoas ao redor e reforçando a
      importância de cada um na sociedade.`,
    },
  ];

  return (
    <Container sx={{ textAlign: "center" }}>
      <Banner />
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "2.5rem",
          marginBottom: "32px",
        }}
        gutterBottom
      >
        Ajudamos a transformar...
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardComponent
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
