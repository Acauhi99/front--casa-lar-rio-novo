import React from "react";
import { Container, Typography, Grid, Box, Button, Card, CardMedia, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

export const Donations = () => {
  return (
    <Container sx={{ textAlign: "center", paddingY: 4, paddingTop: "80px", paddingBottom: "80px" }}>
      
      {/* Citação Inspiradora */}
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        "Toda doação é uma forma de amor. Seu amor deixa marcas. Doe."
      </Typography>
      
      {/* Descrição sobre Doações */}
      <Box sx={{ marginY: 3, textAlign: "left" }}>
        <Typography variant="body1" color="textSecondary" paragraph>
          As doações são muito importantes para o Asilo continuar mantendo e garantindo os cuidados aos nossos idosos com excelência.
          Seja com roupas, alimentos, material de limpeza e tantos outros, além das doações monetárias. Confira abaixo as maneiras com as quais você pode contribuir para o Asilo.
        </Typography>
      </Box>

      {/* Imagem de Destaque */}
      <Box sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
        <CardMedia
          component="img"
          src="https://scontent.fjdf2-2.fna.fbcdn.net/v/t39.30808-6/326501512_1251276062127004_6526888782455255230_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH3uQJ-meo2vXzOQj5Mm2hLAb5zkrRLXA8BvnOStEtcD3Gc_W735kqFfJFQXHgIA57oOBAcoAfR5qMIFcKRMUog&_nc_ohc=MiIh70CyNNsQ7kNvgEIKqrC&_nc_zt=23&_nc_ht=scontent.fjdf2-2.fna&_nc_gid=A6nXb5Q6Rj6k5ldG5NyVgAj&oh=00_AYCFTtdyOoqJX3DUpjrwdPc2DXzqIaOYA_4-u2nzfwmBIw&oe=6740728B"
          alt="Imagem de Doação"
          sx={{ maxWidth: "300px", borderRadius: "8px" }}
        />
      </Box>

      {/* Instruções para Doação */}
      <Box sx={{ textAlign: "left", marginY: 3 }}>
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Para se tornar um doador:
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          1. Entre em contato com a nossa equipe pelo WhatsApp. <br />
          2. Se for uma doação para Dedutibilidade Social por meio do Selo de Compromisso com a Pessoa Idosa (exclusivo para empresas), siga as instruções.
        </Typography>
      </Box>

      {/* Informações Bancárias */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: 2, backgroundColor: "#f8f8f8" }}>
            <Typography variant="h6" color="primary">
              Sicoob
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Agência: 3182-5
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Conta Poupança: 62336498-0
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: 2, backgroundColor: "#f8f8f8" }}>
            <Typography variant="h6" color="primary">
              Banco do Brasil
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Agência: 2544-5
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Conta Corrente: 8328-3
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ padding: 2, backgroundColor: "#f8f8f8" }}>
            <Typography variant="h6" color="primary">
              PIX
            </Typography>
            <Typography variant="body2" color="textSecondary">
              CNPJ: 24.186.074/0001-22
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Botão de Doação */}
      <Box sx={{ marginTop: 4 }}>
        <Button variant="contained" color="primary" size="large">
          Doe sua generosidade, transforme um ato em um impacto
        </Button>
      </Box>

      {/* Seção de Compartilhamento */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <Typography variant="body2" color="textSecondary" sx={{ marginRight: 1 }}>
          Compartilhar:
        </Typography>
        <IconButton color="primary">
          <Facebook />
        </IconButton>
        <IconButton color="primary">
          <Twitter />
        </IconButton>
        <IconButton color="primary">
          <Instagram />
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
        <Typography variant="h6" fontWeight="bold" color="primary">
          Fique atualizado
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Inscreva-se e receba mais informações sobre como contribuir com as causas da instituição.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Inscreva-se
        </Button>
      </Box>
    </Container>
  );
};
