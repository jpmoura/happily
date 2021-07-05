import React from 'react';
import { PersonAdd } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import IRootState from '../../../domain/model/IRootState';
import { toggleShowAddPersonDialog } from '../../../store/ducks/people';
import AddPersonDialog from '../../atom/add-person-dialog';
import FixedFab from '../../atom/fixed-fab';

export default function AddPersonFeature(): JSX.Element {
  const dispatch = useDispatch();
  const beerPrice = useSelector((store: IRootState) => store.happyHourSettings.beerPrice);
  const showAddPersonDialog = useSelector((store: IRootState) => store.people.showAddPersonDialog);
  const tooltipTitle = beerPrice ? 'Adicionar Pessoa' : 'Determine o preço da cerveja antes de adicionar uma pessoa';
  const canAddPerson = beerPrice || beerPrice === 0;

  function toggleDialog(): void {
    dispatch(toggleShowAddPersonDialog());
  }

  return (
    <>
      <Tooltip title={tooltipTitle} placement="top-start">
        <FixedFab color="primary" onClick={toggleDialog} disabled={!canAddPerson}>
          <PersonAdd />
        </FixedFab>
      </Tooltip>
      <AddPersonDialog shouldOpen={showAddPersonDialog} handleClose={toggleDialog} />
    </>
  );
}
