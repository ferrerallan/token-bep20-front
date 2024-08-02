import React, { useState } from 'react';
import { voteForMovie } from '../services/Web3Service';  // Importa do novo arquivo
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

const VoteForMovie = () => {
  const [movieId, setMovieId] = useState('');
  const [message, setMessage] = useState('');

  const handleVoteForMovie = async () => {
    try {
      await voteForMovie(movieId);
      setMessage('Voted for movie successfully');
    } catch (error) {
      console.error('Error voting for movie:', error);
      setMessage('Error voting for movie');
    }
  };

  return (
    <Container maxWidth="sm" style={styles.container}>
      <Typography variant="h4" component="h2" gutterBottom style={styles.header}>
        Vote for Movie
      </Typography>
      <TextField
        fullWidth
        type="number"
        value={movieId}
        onChange={(e) => setMovieId(e.target.value)}
        placeholder="Enter movie ID"
        margin="normal"
        variant="outlined"
        InputProps={{
          style: styles.input,
        }}
      />
      <Button variant="contained" style={styles.button} onClick={handleVoteForMovie} fullWidth>
        Vote for Movie
      </Button>
      {message && (
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default VoteForMovie;
