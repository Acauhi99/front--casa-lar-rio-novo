import { Box, Button, Link, Typography } from '@mui/material';

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        p: 4,
        textAlign: 'center'
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        color="primary"
        gutterBottom
      >
        Página Não Encontrada
      </Typography>

      <Typography 
        variant="h6" 
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Infelizmente, o URL que você tentou acessar não é válido.
      </Typography>

      <Button 
        color="primary" 
        component={Link} 
        href="/"
        variant="contained"
      >
        Voltar para Home
      </Button>
    </Box>
  );
};