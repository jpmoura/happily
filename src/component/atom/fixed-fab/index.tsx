import { Fab, withStyles } from '@material-ui/core';

const FixedFab = withStyles({
  root: {
    position: 'fixed',
    bottom: '56px',
    right: '8px',
    zIndex: 10000,
  },
})(Fab);

export default FixedFab;
