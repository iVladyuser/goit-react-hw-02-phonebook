import css from './Counter.module.css';
import React from 'react';

class Counter extends React.Component {
  state = { value: 5 };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  handleDecrement = () => {
    console.log('уменьшить');
  };
  render() {
    return (
      <div className={css.Counter}>
        <span className={css.Counter__value}>{this.state.value}</span>

        <div className={css.Сounter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
