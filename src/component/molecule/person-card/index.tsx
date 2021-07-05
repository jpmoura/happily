import React from 'react';
import {
  Button, Card, CardActions, CardContent, Grid, IconButton, makeStyles, Tooltip, Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Delete } from '@material-ui/icons';
import PersonCardProps from './types';
import IRootState from '../../../domain/model/IRootState';
import {
  decrementConsumption, incrementConsumption, PeopleActions, removePerson,
} from '../../../store/ducks/people';
import IPerson from '../../../domain/model/IPerson';
import ConsumptionModificationType from '../../../domain/enum/ConsumptionModificationType';

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    color: theme.palette.error.main,
  },
  beerIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function PersonCard({ person }: PersonCardProps): JSX.Element {
  const dispatch = useDispatch();
  const settings = useSelector((store: IRootState) => store.happyHourSettings);
  const classes = useStyles();
  const canDecrement = person.consumption > 0;

  function calculateAmount(): number {
    let amount: number = 0;

    if (settings.beerPrice) {
      amount += settings.beerPrice * person.consumption;
    }

    if (settings.hasServiceFee && settings.serviceFee) {
      amount *= (settings.serviceFee / 100) + 1;
    }

    if (settings.hasCovert && settings.covertPrice) {
      amount += settings.covertPrice;
    }

    return amount;
  }

  function handleCardActionOnClick(modificationType: ConsumptionModificationType): void {
    let action: (value: IPerson) => PeopleActions;

    if (modificationType === ConsumptionModificationType.Decrement) {
      action = decrementConsumption;
    } else {
      action = incrementConsumption;
    }

    dispatch(action(person));
  }

  function handleDeleteOnClick(): void {
    dispatch(removePerson(person));
  }

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid container item justify="space-between">
            <Typography variant="h5" component="span">
              {person.name}
            </Typography>
            <Tooltip title={`Remover ${person.name}`} placement="top-start">
              <IconButton className={classes.deleteButton} onClick={handleDeleteOnClick}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span">
              <FontAwesomeIcon className={classes.beerIcon} icon={faBeer} />
              {person.consumption}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="span">
              R$
              {calculateAmount()}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="space-between">
          <Grid item>
            <Tooltip title="Diminuir o consumo em 1 unidade" placement="top-start">
              <span>
                <Button variant="contained" color="secondary" onClick={() => handleCardActionOnClick(ConsumptionModificationType.Decrement)} disabled={!canDecrement}>
                  Bebeu não
                </Button>
              </span>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Aumentar o consumo em 1 unidade" placement="top-start">
              <Button variant="contained" color="primary" onClick={() => handleCardActionOnClick(ConsumptionModificationType.Increment)}>
                Bebeu
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
