import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingX: 2,
        }}
      >
        <Link href="/" underline="none">
          <img src="/LogoPNG2.png" alt="Logo do asilo" style={{ width: '100px' }} />
        </Link>
        <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color="primary" component={Link} href="/">
            Inicio
          </Button>
          <Button color="primary" component={Link} href="/about">
            Nossa Casa
          </Button>
          <Button color="primary" component={Link} href="/faq">
            Dúvidas
          </Button>
          <Button color="primary" component={Link} href="/donations">
            Doações
          </Button>
          <Button color="primary" component={Link} href="/contact">
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
