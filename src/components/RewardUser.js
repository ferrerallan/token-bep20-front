import React, { useState } from 'react';
import { rewardUser } from '../services/Web3Service';  // Importa do novo arquivo
import { TextField, Button, Container, Typography } from '@mui/material';

const styles = {
  container: {
    marginTop: '2rem',
    fontFamily: 'Orbitron, sans-serif',
    color: '#32CD32',
  },
  input: {
    backgroundColor: '#000',
    color: '#32CD32',
    border: '1px solid #32CD32',
  },
  button: {
    backgroundColor: '#32CD32',
    color: '#000',
    fontFamily: 'Orbitron, sans-serif',
  },
  header: {
    marginBottom: '1rem',
    fontFamily: 'Orbitron, sans-serif',
  },
};

const RewardUser = () => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleRewardUser = async () => {
    try {
      await rewardUser(user);
      setMessage('User rewarded successfully');
    } catch (error) {
      console.error('Error rewarding user:', error);
      setMessage('Error rewarding user');
    }
  };

  return (
    <Container maxWidth="sm" style={styles.container}>
      <Typography variant="h4" component="h2" gutterBottom style={styles.header}>
        Reward User
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter user address"
        margin="normal"
        variant="outlined"
        InputProps={{
          style: styles.input,
        }}
      />
      <Button variant="contained" style={styles.button} onClick={handleRewardUser} fullWidth>
        Reward User
      </Button>
      {message && (
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default RewardUser;
