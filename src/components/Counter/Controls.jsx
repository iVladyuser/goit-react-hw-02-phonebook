import React from 'react';
import css from './Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.Сounter__controls}>
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
