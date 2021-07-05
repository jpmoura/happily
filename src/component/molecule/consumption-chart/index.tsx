import { useTheme } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import IRootState from '../../../domain/model/IRootState';

export default function ConsumptionChart(): JSX.Element {
  const theme = useTheme();
  const consumptions = useSelector((store: IRootState) => store.people.people);

  return (
    <ResponsiveContainer height={300}>
      <BarChart data={consumptions}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="consumption" name="Consumo" fill={theme.palette.primary.main} />
      </BarChart>
    </ResponsiveContainer>
  );
}
