import React from 'react';
import {
  Grid, IconButton, makeStyles, Typography,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    left: 0,
    background: grey[800],
    color: 'white',
  },
  year: {
    marginRight: theme.spacing(1),
  },
}));

export default function Footer(): JSX.Element {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.root}>
      <Grid container alignItems="baseline" justify="space-between">
        <Grid item>
          <IconButton href="https://github.com/jpmoura" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} color="white" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/mourajp/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="white" />
          </IconButton>
        </Grid>
        <Grid item className={classes.year}>
          <Typography>
            <strong>{currentYear}</strong>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
