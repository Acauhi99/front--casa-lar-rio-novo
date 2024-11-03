import { Button, Typography } from '@mui/material';

export const Home = () => {
  return (
    <>
      <Typography variant="h1" color='primary' sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Bem-vindo à Home Page
      </Typography>
      <Typography variant="body1" color='primary' sx={{ fontSize: '1.25rem', mb: 3, textAlign: 'center' }}>
        Esta é a página inicial do nosso site. Esperamos que você goste!
      </Typography>
      <Button variant="contained" color="primary" sx={{ fontSize: '1rem', padding: '12px 24px' }}>
        Saiba Mais
      </Button>
    </>
  );
};
