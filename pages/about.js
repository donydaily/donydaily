import { Container, Typography, Paper } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Tentang donydaily
        </Typography>
        <Typography>
          donydaily adalah situs sederhana berbasis Next.js dan Material UI yang dibuat untuk contoh deploy di Vercel.
        </Typography>
      </Paper>
    </Container>
  );
}