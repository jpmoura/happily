import React, { useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import IPerson from '../../../domain/model/IPerson';
import { addPerson } from '../../../store/ducks/people';
import AddPersonDialogProps from './types';

function AddPersonDialog({ shouldOpen, handleClose }: AddPersonDialogProps): JSX.Element {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');

  function handleAddOnClick(): void {
    const newPerson: IPerson = { name, consumption: 0 };
    dispatch(addPerson(newPerson));
    handleClose();
  }

  return (
    <Dialog open={shouldOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Adicionar pessoa</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nome da pessoa"
          fullWidth
          onChange={(event) => setName(event.currentTarget.value)}
        />
      </DialogContent>
      <DialogActions>
        <Grid container justify="space-between">
          <Grid item>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleAddOnClick} color="primary">
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default AddPersonDialog;
