import React, { useState } from 'react';
import {
  FormControlLabel, FormGroup, Grid, Box, Switch, TextField, InputAdornment, Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import IRootState from '../../../domain/model/IRootState';
import {
  HappyHourSettingsActions, setBeerPrice, setCovertPrice, setServiceFee, toggleHasCovert,
  toggleHasServiceFee,
} from '../../../store/ducks/happyHourSettings';

export default function HappyHourSettingsForm(): JSX.Element {
  const dispatch = useDispatch();
  const settings = useSelector((store: IRootState) => store.happyHourSettings);
  const [state, setState] = useState(settings);

  function handleHasCovertOnClick(): void {
    setState(() => ({
      ...state,
      hasCovert: !state.hasCovert,
    }));
    dispatch(toggleHasCovert());
  }

  function handleHasServiceFeeOnClick(): void {
    setState(() => ({
      ...state,
      hasServiceFee: !state.hasServiceFee,
    }));
    dispatch(toggleHasServiceFee());
  }

  function handleOnChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    let action: (value: number) => HappyHourSettingsActions;

    switch (event.target.name) {
      case 'beerPrice':
        action = setBeerPrice;
        break;
      case 'covertPrice':
        action = setCovertPrice;
        break;
      case 'serviceFee':
        action = setServiceFee;
        break;
      default:
        return;
    }

    const value = Number.parseFloat(event.target.value);
    const newState = {
      ...state,
    };
    newState[event.target.name] = value;

    setState(() => newState);
    dispatch(action(value));
  }

  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="beerPrice"
              autoFocus
              fullWidth
              label="Preço da cerveja"
              type="number"
              placeholder="Preço da cerveja"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography>R$</Typography>
                  </InputAdornment>
                ),
              }}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup row>
              <FormControlLabel
                control={<Switch color="primary" checked={state.hasCovert} onClick={handleHasCovertOnClick} name="hasCovert" />}
                label="Tem Covert?"
              />
              {state.hasCovert && (
                <TextField
                  name="covertPrice"
                  label="Preço da covert"
                  type="number"
                  placeholder="Preço do covert"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography>R$</Typography>
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleOnChange}
                />
              )}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup row>
              <FormControlLabel
                control={<Switch color="primary" checked={state.hasServiceFee} onClick={handleHasServiceFeeOnClick} name="hasServiceFee" />}
                label="Tem taxa de serviço?"
              />
              {state.hasServiceFee && (
                <TextField
                  name="serviceFee"
                  label="Taxa de serviço"
                  type="number"
                  placeholder="Porcentagem da taxa de serviço"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography>%</Typography>
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleOnChange}
                />
              )}
            </FormGroup>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
