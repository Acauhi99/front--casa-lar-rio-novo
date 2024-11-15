import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Link, Typography, Grid } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "background.default",
        paddingY: 3,
        paddingX: { xs: 2, sm: 4 },
        position: "fixed",
        bottom: 0,
        width: "100%",
        boxShadow: "0 -1px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          textAlign: { xs: "center", sm: "left" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" color="inherit">
            Casa Lar Rio Novo
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" color="inherit">
            Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: { xs: "center", sm: "flex-end" },
            paddingRight: { xs: 0, sm: 7 },
          }}
        >
          <Link
            data-testid="instagram-link"
            href="https://www.instagram.com/casalarderionovo/"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            <InstagramIcon fontSize="large" />
          </Link>
          <Link
            data-testid="facebook-link"
            href="https://www.facebook.com/ILPIcasalar/?locale=pt_BR"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            <FacebookIcon fontSize="large" />
          </Link>
          <Link
            data-testid="whatsapp-link"
            href="https://wa.me/5532999920658?text=Ol%C3%A1,%20vim%20atr%C3%A1ves%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            <WhatsAppIcon fontSize="large" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
