import { Box, Container, Paper, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Map from "../../components/Map/Map";
import { useRef } from "react";

export const Contact = () => {
  const position = [-21.47230429755037, -43.12305091806953];
  const mapRef = useRef(null);

  const handleCenterMap = () => {
    if (mapRef.current) {
      mapRef.current.setView(position, 16);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        position: "relative",
        zIndex: 1,
        mb: 2,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          gutterBottom
          textAlign="center"
          sx={{ mb: 3 }}
        >
          Fale Conosco
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 2 }}
        >
          Envie sua mensagem
        </Typography>

        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          32 99992-0658
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            width: "30%",
            mx: "auto",
          }}
        >
          <Typography variant="body1" textAlign="center">
            CEP 36150
            <br />
            Rua Jacob da Paixao, 115
            <br />
            Rio Novo - MG
          </Typography>
        </Paper>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <IconButton
            color="primary"
            size="large"
            aria-label="location"
            onClick={handleCenterMap}
          >
            <LocationOnIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: 2,
            height: "300px",
            borderRadius: 1,
            overflow: "hidden",
            "& .leaflet-container": {
              width: "100% !important",
              height: "100% !important",
              zIndex: 1,
            },
          }}
        >
          <Map position={position} mapRef={mapRef} />
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
