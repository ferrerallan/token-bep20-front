import React, { useState } from 'react';
import { checkBalance } from '../services/Web3Service';  // Importa do novo arquivo
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

const CheckBalance = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const handleCheckBalance = async () => {
    try {
      const balance = await checkBalance(address);
      setBalance(balance);
    } catch (error) {
      console.error('Error checking balance:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={styles.container}>
      <Typography variant="h4" component="h2" gutterBottom style={styles.header}>
        Check Balance
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"
        margin="normal"
        variant="outlined"
        InputProps={{
          style: styles.input,
        }}
      />
      <Button variant="contained" style={styles.button} onClick={handleCheckBalance} fullWidth>
        Check Balance
      </Button>
      {balance && (
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          Balance: {balance}
        </Typography>
      )}
    </Container>
  );
};

export default CheckBalance;
