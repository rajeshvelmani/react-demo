import TodoList from "../components/TodoList";
import React from "react";
import "../styles/header.scss";

class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', count: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.increment = this.increment.bind(this);
  }

  render() {
    console.log("screen rendering .....!");
    return (
      <div>
        <h1>TODO</h1>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>


        <div>
          Count: {this.state.count}
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }

  increment() {
    this.setState({ count: ++this.state.count });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default (TodoScreen);

