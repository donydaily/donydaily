import { AppBar, Box, Button, Container, Toolbar, Typography, Paper, Link } from '@mui/material';
import NextLink from 'next/link';

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            donydaily
          </Typography>
          <Button component={NextLink} href="/about" color="inherit">
            About
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Selamat datang
          </Typography>
          <Typography>
            Ini adalah website sederhana dengan tampilan Material Design dan dukungan dark mode.
          </Typography>
        </Paper>
      </Container>
      <Box component="footer" sx={{ mt: 5, p: 3, textAlign: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} donydaily
        </Typography>
      </Box>
    </>
  );
}