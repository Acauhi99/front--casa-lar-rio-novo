import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Typography, Button, Paper, styled } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const faqData = [
  {
    id: 1,
    title: "Como se dá o acolhimento de idosos no Asilo Casa Lar?",
    content:
      "No Asilo Casa Lar, o acolhimento é realizado com uma contribuição de 70% do benefício de cada idoso, destinada exclusivamente ao seu cuidado e bem-estar. Esse valor é utilizado para cobrir despesas com alimentação, cuidados médicos, produtos de higiene e outros itens essenciais. Os 30% restantes ficam com o idoso para gastos pessoais, como medicamentos não cobertos pelo SUS, consultas médicas particulares, roupas, calçados e fraldas, garantindo que ele tenha tudo o que precisa para uma vida digna e confortável.",
  },
  {
    id: 2,
    title: "Como posso visitar um familiar ou amigo no Asilo Casa Lar?",
    content:
      "Aqui no Asilo Casa Lar, você pode visitar seus amigos e familiares queridos a qualquer hora, sem restrições. Sabemos o quanto é importante a presença da família e amigos, e queremos que as visitas aconteçam no momento mais conveniente para você. Seja para passar um tempo agradável ou para conhecer o espaço, todos são sempre muito bem-vindos.",
  },
  {
    id: 3,
    title: "O Asilo Casa Lar funciona em que horário?",
    content:
      "O Asilo Casa Lar está em funcionamento 24 horas por dia, todos os dias da semana. Isso garante que nossos idosos tenham o cuidado contínuo e acompanhamento necessário, independentemente do horário. Estamos sempre disponíveis para oferecer o melhor suporte e carinho a quem está sob nossos cuidados.",
  },
  {
    id: 4,
    title: "O Asilo Casa Lar recebe apoio governamental?",
    content:
      "O Asilo Casa Lar é uma instituição filantrópica e, por isso, não recebe apoio direto do governo. A manutenção da instituição é garantida pelas contribuições dos próprios residentes, o que nos permite oferecer um ambiente acolhedor e dedicado ao cuidado dos idosos.",
  },
  {
    id: 5,
    title:
      "Quais são os requisitos para um idoso ser acolhido no Asilo Casa Lar?",
    content:
      "Para ser acolhido no Asilo Casa Lar, o idoso precisa ter mais de 60 anos e ser independente nas atividades diárias, embora possa precisar de alguma orientação ou ajuda pontual. Nosso objetivo é acolher aqueles que buscam um ambiente seguro e confortável, e, ao longo do tempo, continuamos a oferecer cuidados à medida que as necessidades de cada residente evoluem. A instituição está pronta para receber idosos que precisam de apoio, sempre com muito respeito e carinho.",
  },
  {
    id: 6,
    title: "O que é uma Instituição de Longa Permanência para Idosos (ILPI)?",
    content:
      "Uma ILPI, como o Asilo Casa Lar, é um espaço seguro e acolhedor onde idosos podem viver com conforto e cuidados contínuos. Nosso objetivo é proporcionar uma convivência tranquila e respeitosa para aqueles que precisam de apoio para suas atividades diárias, oferecendo um ambiente familiar e cuidado para o bem-estar dos residentes.",
  },
  {
    id: 7,
    title: "Qual o objetivo do Asilo Casa Lar?",
    content:
      "O Asilo Casa Lar tem como objetivo oferecer um espaço seguro e acolhedor, onde idosos podem viver com conforto, cuidados contínuos e a convivência tranquila de um ambiente familiar. Buscamos garantir o bem-estar dos nossos residentes, oferecendo apoio para suas atividades diárias, respeitando suas individualidades e necessidades.",
  },
];

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
  backgroundColor: "#25D366",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1EBE5D",
  },
}));

const FaqTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontWeight: "bold",
}));

const FaqContent = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {expanded ? text : `${text.substring(0, 150)}...`}
      </Typography>
      <Button
        variant="text"
        onClick={() => setExpanded(!expanded)}
        sx={{ mt: 1, textTransform: "none" }}
      >
        {expanded ? "Ler Menos" : "Ler Mais"}
      </Button>
    </>
  );
};

FaqContent.propTypes = {
  text: PropTypes.string.isRequired,
};

export const Faq = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        paddingTop: { xs: "100px", sm: "120px" },
        paddingBottom: "100px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "primary.main",
          fontSize: { xs: "2rem", sm: "3rem" },
          position: "relative",
          zIndex: 1,
        }}
      >
        Dúvidas Frequentes
      </Typography>

      {faqData.map((faq) => (
        <FaqItem key={faq.id} elevation={1}>
          <FaqTitle variant="h6" gutterBottom>
            {faq.title}
          </FaqTitle>
          <FaqContent text={faq.content} />
        </FaqItem>
      ))}

      <ContactButton
        variant="contained"
        href="https://wa.me/5532999920658?text=Ol%C3%A1,%20vim%20atr%C3%A1ves%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es"
        target="_blank"
        rel="noopener"
        startIcon={<WhatsAppIcon />}
      >
        Mais dúvidas? Entre em contato
      </ContactButton>
    </Container>
  );
};