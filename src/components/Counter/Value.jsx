import css from './Counter.module.css';
import React from 'react';

const Value = ({ value }) => (
  <span className={css.Counter__value}>{value}</span>
);

export default Value;
