import { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Blog', path: '/blog' },
    { text: 'Fale Conosco', path: '/contato' },
    { text: 'Função', path: '/conversor' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* CABEÇALHO */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" onClick={() => setOpen(true)} sx={{ cursor: 'pointer' }}>
            ☰ Meu Projeto (Abrir Menu)
          </Typography>
        </Toolbar>
      </AppBar>

      {/* DRAWER (MENU LATERAL) */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} onClick={() => setOpen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* CONTEÚDO DAS PÁGINAS */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>

      {/* RODAPÉ */}
      <Box component="footer" sx={{ p: 2, textAlign: 'center', bgcolor: '#f5f5f5' }}>
        <Typography variant="body2">Data: 10/06 - Projeto Acadêmico</Typography>
      </Box>
    </Box>
  );
}