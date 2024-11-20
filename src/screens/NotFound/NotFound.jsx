import { Box, Button, Link, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        p: 5,
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <SentimentDissatisfiedIcon color="secondary" sx={{ fontSize: 80 }} />

      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        Página Não Encontrada
      </Typography>

      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Infelizmente, o URL que você tentou acessar não é válido.
      </Typography>

      <Button
        color="primary"
        component={Link}
        href="/"
        variant="contained"
        size="large"
      >
        Voltar para Home
      </Button>
    </Box>
  );
};
