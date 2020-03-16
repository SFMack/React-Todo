import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';

const data = [
	{
		task: 'Peel Carrots',
		completed: false,
		id: 1
	},
	{
		task: 'Supreme Oranges',
		completed: false,
		id: 2
	}
];

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			todo: data
		};
	}

	clearClick = e => {
		e.preventDefault();
		console.log('Clear clicked');
	};

	changeHandler = e => {
		this.setState({ value: e.target.value });
		console.log(e.target.value);
	};

	addTask = task => {
		console.log('add item: ', task);
		console.log(task.task);
		this.setState({
			todo: [...this.state.todo, task]
		});
		console.log(this.state.todo);
	};

	render() {
		const { todo } = this.state;

		return (
			<div>
				<TodoList state={todo} addtask={this.addTask} />
			</div>
		);
	}
}
