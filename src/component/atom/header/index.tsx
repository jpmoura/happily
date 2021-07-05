import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import {
  AppBar, makeStyles, Toolbar, Typography,
} from '@material-ui/core';
import { amber } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    background: amber[600],
    color: 'black',
  },
  title: {
    flexGrow: 1,
  },
  secondaryToolbar: {
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <FontAwesomeIcon className={classes.icon} icon={faGlassCheers} />
            Happily
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.secondaryToolbar} />
    </>
  );
}
