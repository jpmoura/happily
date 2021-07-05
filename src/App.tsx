import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import HomePage from './component/page/home';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    flexGrow: 1,
    width: '100%',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Box height="100%">
        <HomePage />
      </Box>
    </Container>
  );
}
