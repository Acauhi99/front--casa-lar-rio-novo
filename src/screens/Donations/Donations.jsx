import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Snackbar,
} from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import { useState } from "react";

export const Donations = () => {
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setEmail("");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        paddingY: 4,
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Citação Inspiradora */}
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        "Toda doação é uma forma de amor. Seu amor deixa marcas. Doe."
      </Typography>

      {/* Descrição sobre Doações */}
      <Box sx={{ marginY: 3, textAlign: "left" }}>
        <Typography variant="body1" color="textSecondary" paragraph>
          As doações são muito importantes para o Asilo continuar mantendo e
          garantindo os cuidados aos nossos idosos com excelência. Seja com
          roupas, alimentos, material de limpeza e tantos outros, além das
          doações monetárias. Confira abaixo as maneiras com as quais você pode
          contribuir para o Asilo.
        </Typography>
      </Box>

      {/* Imagem de Destaque */}
      <Box sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
        <CardMedia
          component="img"
          src="/Imagem-Pagina-Donation.png"
          alt="Imagem de Doação"
          sx={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Instruções para Doação */}
      <Box sx={{ textAlign: "left", marginY: 3 }}>
        <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
          Para se tornar um doador:
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          1. Entre em contato com a nossa equipe pelo WhatsApp. <br />
          2. Se for uma doação para Dedutibilidade Social por meio do Selo de
          Compromisso com a Pessoa Idosa (exclusivo para empresas), siga as
          instruções.
        </Typography>
      </Box>

      {/* Informações Bancárias */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginBottom: 8 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 2,
              backgroundColor: "#f8f8f8",
              boxShadow: 3,
              height: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="primary">
              Sicoob
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Agência: 3182-5
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Conta Poupança: 62336498-0
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 2,
              backgroundColor: "#f8f8f8",
              boxShadow: 3,
              height: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="primary">
              Banco do Brasil
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Agência: 2544-5
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Conta Corrente: 8328-3
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 2,
              backgroundColor: "#f8f8f8",
              boxShadow: 3,
              height: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="primary">
              PIX
            </Typography>
            <Typography variant="body1" color="textSecondary">
              CNPJ: 24.186.074/0001-22
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Botão de Doação */}
      <Box sx={{ marginTop: 4 }}>
        <Button variant="contained" color="primary" size="large">
          Transforme sua generosidade em impacto
        </Button>
      </Box>

      {/* Seção de Compartilhamento */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ marginRight: 1 }}
        >
          Compartilhar:
        </Typography>
        <IconButton
          color="primary"
          component="a"
          href="https://www.instagram.com/casalarderionovo/"
          target="_blank"
          rel="noopener"
          aria-label="Compartilhar no Instagram"
        >
          <Instagram sx={{ fontSize: 32 }} />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://www.facebook.com/ILPIcasalar/?locale=pt_BR"
          target="_blank"
          rel="noopener"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      {/* Seção de Newsletter */}
      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          padding: 3,
          borderRadius: "8px",
          marginTop: 6,
          textAlign: "left",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          Fique atualizado
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Inscreva-se e receba mais informações sobre como contribuir com as
          causas da instituição.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              flex: 1,
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginLeft: 2 }}
            onClick={handleSubscribe}
          >
            Inscreva-se
          </Button>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Email cadastrado com sucesso!"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          ContentProps={{
            sx: {
              backgroundColor: "primary.main",
              color: "#fff",
              textAlign: "center",
            },
          }}
        />
      </Box>
    </Container>
  );
};
