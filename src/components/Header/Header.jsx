import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nossa Casa", href: "/about" },
    { label: "Dúvidas", href: "/faq" },
    { label: "Doações", href: "/donations" },
    { label: "Contato", href: "/contact" },
  ];

  const linkStyles = {
    fontWeight: "bold",
    color: "primary.main",
    textDecoration: "none",
    typography: "body1", // Usando a variante body1 do tema
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: 2,
          }}
        >
          <Link href="/" underline="none">
            <img
              src="/LogoPNG2.png"
              alt="Logo do asilo"
              style={{ width: "100px" }}
            />
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                href={link.href}
                sx={linkStyles}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: "10%",
              padding: "10px",
              width: "48px",
              height: "48px",
              marginRight: 2,
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ fontSize: "24px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  sx={{
                    "& .MuiListItemText-primary": linkStyles,
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
