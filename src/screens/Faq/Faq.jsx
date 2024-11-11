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
          <Typography variant="h6" gutterBottom>
            Pergunta 1
          </Typography>
          <Typography variant="body1">Resposta 1</Typography>
        </FaqItem>

        <FaqItem elevation={1}>
          <Typography variant="h6" gutterBottom>
            Pergunta 2
          </Typography>
          <Typography variant="body1">Resposta 2</Typography>
        </FaqItem>

        <FaqItem elevation={1}>
          <Typography variant="h6" gutterBottom>
            Pergunta 3
          </Typography>
          <Typography variant="body1">Resposta 3</Typography>
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

        <ContactButton
          variant="contained"
          color="secondary"
          startIcon={<InstagramIcon />}
        >
          Entre em contato pelo Instagram
        </ContactButton>
      </Box>
    </Container>
  );
};
