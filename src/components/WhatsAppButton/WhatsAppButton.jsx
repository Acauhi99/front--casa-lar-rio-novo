import { Link, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/5532999920658?text=Ol%C3%A1,%20vim%20atr%C3%A1ves%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es"
      target="_blank"
      rel="noopener"
      sx={{
        position: 'fixed',
        bottom: 120,
        right: 20,
        zIndex: 1000,
      }}
    >
      <Fab
        sx={{
          bgcolor: '#25d366',
          '&:hover': {
            bgcolor: '#20ba57',
          },
        }}
      >
        <WhatsAppIcon sx={{ color: '#fff' }} fontSize="large" />
      </Fab>
    </Link>
  );
};