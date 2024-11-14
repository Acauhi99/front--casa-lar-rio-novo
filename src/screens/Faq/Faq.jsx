import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  styled,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const FaqItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: theme.shadows[3],
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "1rem",
}));

const FaqTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const FaqContent = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <Typography
        variant="body1"
        sx={{ textAlign: "justify" }}
      >
        {expanded ? text : `${text.substring(0, 150)}...`}
      </Typography>
      <Button
        variant="text"
        onClick={handleToggleExpand}
        sx={{ mt: 1, textTransform: "none" }}
      >
        {expanded ? "Ler Menos" : "Ler Mais"}
      </Button>
    </>
  );
};

export const Faq = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "primary.main",
          mb: 4,
        }}
      >
        Dúvidas Frequentes
      </Typography>

      <Box sx={{ mb: 4 }}>
        <FaqItem elevation={1}>
          <FaqTitle variant="h6" gutterBottom>
            Como se dá o acolhimento de idosos no Asilo Casa Lar?
          </FaqTitle>
          <FaqContent text="No Asilo Casa Lar, o acolhimento é realizado com uma contribuição de 70% do benefício de cada idoso, destinada exclusivamente ao seu cuidado e bem-estar. Esse valor é utilizado para cobrir despesas com alimentação, cuidados médicos, produtos de higiene e outros itens essenciais. Os 30% restantes ficam com o idoso para gastos pessoais, como medicamentos não cobertos pelo SUS, consultas médicas particulares, roupas, calçados e fraldas, garantindo que ele tenha tudo o que precisa para uma vida digna e confortável." />
        </FaqItem>

        <FaqItem elevation={1}>
          <FaqTitle variant="h6" gutterBottom>
            Como posso visitar um familiar ou amigo no Asilo Casa Lar?
          </FaqTitle>
          <FaqContent text="Aqui no Asilo Casa Lar, você pode visitar seus amigos e familiares queridos a qualquer hora, sem restrições. Sabemos o quanto é importante a presença da família e amigos, e queremos que as visitas aconteçam no momento mais conveniente para você. Seja para passar um tempo agradável ou para conhecer o espaço, todos são sempre muito bem-vindos." />
        </FaqItem>

        <FaqItem elevation={1}>
          <FaqTitle variant="h6" gutterBottom>
          O Asilo Casa Lar funciona em que horário?
          </FaqTitle>
          <FaqContent text="O Asilo Casa Lar está em funcionamento 24 horas por dia, todos os dias da semana. Isso garante que nossos idosos tenham o cuidado contínuo e acompanhamento necessário, independentemente do horário. Estamos sempre disponíveis para oferecer o melhor suporte e carinho a quem está sob nossos cuidados." />
        </FaqItem>

        <FaqItem elevation={1}>
          <FaqTitle variant="h6" gutterBottom>
          O Asilo Casa Lar recebe apoio governamental?
          </FaqTitle>
          <FaqContent text="O Asilo Casa Lar é uma instituição filantrópica e, por isso, não recebe apoio direto do governo. A manutenção da instituição é garantida pelas contribuições dos próprios residentes, o que nos permite oferecer um ambiente acolhedor e dedicado ao cuidado dos idosos." />
        </FaqItem>

        <FaqItem elevation={1}>
          <FaqTitle variant="h6" gutterBottom>
          Quais são os requisitos para um idoso ser acolhido no Asilo Casa Lar?
          </FaqTitle>
          <FaqContent text="Para ser acolhido no Asilo Casa Lar, o idoso precisa ter mais de 60 anos e ser independente nas atividades diárias, embora possa precisar de alguma orientação ou ajuda pontual. Nosso objetivo é acolher aqueles que buscam um ambiente seguro e confortável, e, ao longo do tempo, continuamos a oferecer cuidados à medida que as necessidades de cada residente evoluem. A instituição está pronta para receber idosos que precisam de apoio, sempre com muito respeito e carinho." />
        </FaqItem>

        <FaqItem elevation={1}>
          <FaqTitle variant="h6" gutterBottom>
          O que é uma Instituição de Longa Permanência para Idosos (ILPI)?
          </FaqTitle>
          <FaqContent text="Uma ILPI, como o Asilo Casa Lar, é um espaço seguro e acolhedor onde idosos podem viver com conforto e cuidados contínuos. Nosso objetivo é proporcionar uma convivência tranquila e respeitosa para aqueles que precisam de apoio para suas atividades diárias, oferecendo um ambiente familiar e cuidado para o bem-estar dos residentes." />
        </FaqItem>

        <FaqItem elevation={1}>
          <FaqTitle variant="h6" gutterBottom>
          Qual o objetivo do Asilo Casa Lar?
          </FaqTitle>
          <FaqContent text="O Asilo Casa Lar tem como objetivo oferecer um espaço seguro e acolhedor, onde idosos podem viver com conforto, cuidados contínuos e a convivência tranquila de um ambiente familiar. Buscamos garantir o bem-estar dos nossos residentes, oferecendo apoio para suas atividades diárias, respeitando suas individualidades e necessidades." />
        </FaqItem>


      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <ContactButton
          variant="contained"
          color="success"
          startIcon={<WhatsAppIcon />}
        >
          Entre em contato pelo WhatsApp
        </ContactButton>

      </Box>
    </Container>
  );
};
