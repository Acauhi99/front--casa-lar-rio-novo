import React from 'react';
import { Typography, Card, CardContent, Grid, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import './Home.css';

export const Home = () => {
  return (
    <Container maxWidth="lg" className="container">
      <Grid container spacing={4} justifyContent="center">
        
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardContent>
              <CheckCircleIcon color="primary" className="icon" />
              <Typography variant="h6" color="textPrimary" className="card-title">
                Atendimento Humanizado
              </Typography>
              <Typography variant="body2" className="card-text">
                Ao longo de mais de um século de história, a Casa Lar tem se dedicado a oferecer um atendimento humanizado...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardContent>
              <FavoriteIcon color="primary" className="icon" />
              <Typography variant="h6" color="textPrimary" className="card-title">
                Infraestrutura Dedicada
              </Typography>
              <Typography variant="body2" className="card-text">
                Ao longo de sua história, a Casa Lar tem buscado oferecer um ambiente seguro e acolhedor...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardContent>
              <GroupIcon color="primary" className="icon" />
              <Typography variant="h6" color="textPrimary" className="card-title">
                Programas de Inclusão
              </Typography>
              <Typography variant="body2" className="card-text">
                Acreditamos que o envelhecimento saudável envolve laços sociais e interação com a comunidade...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
