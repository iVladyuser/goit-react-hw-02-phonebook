import css from './Counter.module.css';
import React from 'react';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
  //   static propTypes = { initialValue: 0 };
  state = { value: this.props.initialValue || 0 };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };
  render() {
    return (
      <div className={css.Counter}>
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
