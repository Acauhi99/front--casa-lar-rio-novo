import React from 'react';
import { Typography, Card, CardContent, Grid, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import './Home.css';

export const Home = () => {
  return (
    <Container className="container">
      <Typography variant="h5" color="primary" className='text-card' gutterBottom>
        Ajudamos a transformar...
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardContent>
              <CheckCircleIcon className="icon" sx={{ color: 'primary.main' }} />
              <Typography variant="h6" className="card-title" color="primary">
                Atendimento Humanizado
              </Typography>
              <Typography variant="body2" className="card-text">
                Ao longo de mais de um século de história, a Casa Lar tem se dedicado a oferecer um atendimento humanizado, garantindo cuidado e acolhimento integral a cada residente. Nosso compromisso vai além da assistência física, priorizando também o bem-estar emocional e social dos idosos, sempre respeitando suas histórias e singularidades. Acreditamos que cada pessoa merece envelhecer com dignidade e carinho, e trabalhamos para que todos sintam-se em um verdadeiro lar.              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardContent>
              <FavoriteIcon className="icon" sx={{ color: 'primary.main' }} />
              <Typography variant="h6" className="card-title" color="primary">
                Infraestrutura Dedicada
              </Typography>
              <Typography variant="body2" className="card-text">
                Ao longo de sua história, a Casa Lar tem buscado oferecer um ambiente seguro e acolhedor para todos os residentes. Com instalações adaptadas, a instituição garante acessibilidade e conforto, promovendo a autonomia dos idosos. Além disso, contamos com áreas comuns que incentivam o convívio e a socialização, proporcionando um verdadeiro lar onde todos se sentem bem-vindos.              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardContent>
              <GroupIcon className="icon" sx={{ color: 'primary.main' }} />
              <Typography variant="h6" className="card-title" color="primary">
                Programas de Inclusão
              </Typography>
              <Typography variant="body2" className="card-text">
                Acreditamos que o envelhecimento saudável envolve laços sociais e interação com a comunidade. Em nossos programas de inclusão, realizamos atividades integrativas, como nossa tradicional Festa Junina e festividades de fim de ano, que são muito esperadas pelos residentes. Esses eventos fortalecem o sentimento de pertencimento e promovem o resgate da autoestima dos nossos idosos, conectando-os com as pessoas ao redor e reforçando a importância de cada um na sociedade.              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
