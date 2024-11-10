import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'background.default',
        paddingY: 3,
        paddingX: 0,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h5" color="inherit">
            Casa Lar Rio Novo
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant="body1" color="inherit">
            Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'right', display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <Link
            href="https://www.instagram.com/casalarderionovo/"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            <InstagramIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.facebook.com/ILPIcasalar/?locale=pt_BR"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            <FacebookIcon fontSize="large" />
          </Link>
          <Link
            href="https://wa.me/5532999920658?text=Ol%C3%A1,%20vim%20atr%C3%A1ves%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            <WhatsAppIcon fontSize="large" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
