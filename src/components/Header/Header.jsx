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
          <img src="/logo.png" alt="Logo do asilo" style={{ width: '120px' }} />
        </Link>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="primary" component={Link} href="/contact">
            Contato
          </Button>
          <Button color="primary" component={Link} href="/donations">
            Doações
          </Button>
          <Button color="primary" component={Link} href="/faq">
            FAQ
          </Button>
          <Button color="primary" component={Link} href="/volunteers">
            Voluntários
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
