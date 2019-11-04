import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todo: [
				{
					task: 'Peel Carrots',
					completed: false
				},
				{
					task: 'Supreme Oranges',
					completed: false
				}
			]
		};
	}

	submitTask = e => {
		e.preventDefault();
	};

	clearClick = e => {
		e.preventDefault();
		console.log('Clear clicked');
	};

	changeHandler = e => {
		e.preventDefault();
		const newTask = e.target.value;
		console.log(newTask);
	};

	render() {
		return (
			<div>
				<TodoForm
					submitClick={this.submitClick}
					clearClick={this.clearClick}
					changeHandler={this.changeHandler}
				/>
				<TodoList array={this.state.todo} />
			</div>
		);
	}
}

export default App;
