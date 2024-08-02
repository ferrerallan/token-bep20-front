import React from 'react';
import './App.css';
import CheckBalance from './components/CheckBalance';
import RewardUser from './components/RewardUser';
import RewardReview from './components/RewardReview';
import RewardReferral from './components/RewardReferral';
import VoteForMovie from './components/VoteForMovie';
import VoteRanking from './components/VoteRanking';
import { Container, Typography } from '@mui/material';

const styles = {
  container: {
    fontFamily: 'Orbitron, sans-serif',
    color: '#32CD32',
  },
  header: {
    marginBottom: '1rem',
  },
};

function App() {
  return (
    <Container style={styles.container}>
      <Typography variant="h3" component="h1" style={styles.header}>
        BEP-20 - Streaming Token Interface
      </Typography>
      <CheckBalance />      
      <RewardReview />
      <RewardReferral />
      
    </Container>
  );
}

export default App;
