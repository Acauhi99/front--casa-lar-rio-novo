import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main', // Define a cor de fundo como "primary"
        color: 'background.default', // Define a cor padrão de texto como "background"
        paddingY: 3,
        paddingX: 2,
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
        <Typography variant="h5" color="inherit"> {/* Usa a cor herdada, que agora é "background.default" */}
          Casa Lar Rio Novo
        </Typography>
        <Typography variant="body1" color="inherit"> {/* Usa a cor herdada */}
          Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Link
            href="https://www.instagram.com/casalarderionovo/"
            target="_blank"
            rel="noopener"
            color="inherit" // Usa a cor herdada para o ícone também
            underline="hover"
          >
            <InstagramIcon fontSize="large" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
