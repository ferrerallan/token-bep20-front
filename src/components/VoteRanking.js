import React, { useState, useEffect } from 'react';
import { getAllVotes } from '../services/Web3Service';  // Importa do novo arquivo
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const styles = {
  container: {
    marginTop: '2rem',
    fontFamily: 'Orbitron, sans-serif',
    color: '#32CD32',
  },
  list: {
    backgroundColor: '#000',
    color: '#32CD32',
    border: '1px solid #32CD32',
  },
};

const VoteRanking = () => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      const result = await getAllVotes();
      const movieVotes = result[0].map((movieId, index) => ({
        movieId,
        votes: result[1][index],
      }));
      setVotes(movieVotes);
    };

    fetchVotes();
  }, []);

  return (
    <Container maxWidth="sm" style={styles.container}>
      <Typography variant="h4" component="h2" gutterBottom>
        Vote Ranking
      </Typography>
      <List>
        {votes.map((movie) => (
          <ListItem key={movie.movieId} style={styles.list}>
            <ListItemText primary={`Movie ID: ${movie.movieId} - Votes: ${movie.votes}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default VoteRanking;
