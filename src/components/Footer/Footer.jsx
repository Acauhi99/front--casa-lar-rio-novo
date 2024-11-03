import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
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
        <Typography variant="h5" color="primary">
          Casa Lar Rio Novo
        </Typography>
        <Typography variant="body1" color="primary">
          Rua Jacob da Paixao, 115 Rio Novo - MG, 36.150-000
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Link
            href="https://www.instagram.com/casalarderionovo/"
            target="_blank"
            rel="noopener"
            color="secondary"
            underline="hover"
          >
            <InstagramIcon fontSize="large" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
