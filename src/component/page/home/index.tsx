import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import HappyHourSettingsForm from '../../molecule/happy-hour-settings-form';
import DefaultTemplate from '../../template/default-template';
import AddPersonFeature from '../../organism/add-person-feature';
import ConsumptionChart from '../../molecule/consumption-chart';
import IRootState from '../../../domain/model/IRootState';
import IPerson from '../../../domain/model/IPerson';
import PersonCard from '../../molecule/person-card';

export default function HomePage(): JSX.Element {
  const people = useSelector((store: IRootState) => store.people.people);
  const canShowConsumption = people.length > 0;

  function createPersonCard(person: IPerson): JSX.Element {
    return <Grid key={person.name} item xs={12}><PersonCard person={person} /></Grid>;
  }

  return (
    <DefaultTemplate>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <HappyHourSettingsForm />
        </Grid>
        {people.map((person) => createPersonCard(person))}
        {canShowConsumption && (
          <Grid item xs={12}>
            <ConsumptionChart />
          </Grid>
        )}
      </Grid>
      <AddPersonFeature />
    </DefaultTemplate>
  );
}
