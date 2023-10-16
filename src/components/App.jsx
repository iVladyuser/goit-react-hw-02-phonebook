import Counter from './Counter/Counter';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList';
import { Component } from 'react';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// export const App = () => {
//   return (
//     <div>
//       <Counter initialValue={10}></Counter>
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} />
//       <TodoList/>
//     </div>
//   );
// };

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Learn React', completed: true },
      { id: 'id-2', text: 'Learn React and Node.js', completed: false },
      { id: 'id-3', text: 'Learn intervie', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id!== todoId) }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc, 0);
    return (
      <div>
        <Counter initialValue={10}></Counter>
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
