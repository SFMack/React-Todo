import React, { Component } from 'react';

export default class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			task: '',
			completed: false
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		const { todo } = this.props;
		this.props.addtask(todo);
	};

	clearClick = e => {
		e.preventDefault();
		console.log('Clear clicked');
	};

	changeHandler = e => {
		this.setState({ task: e.target.value, id: Date.now() });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					name='todo'
					placeholder='Add a task'
					onChange={this.changeHandler}
					value={this.state.task}
				/>
				<input type='submit' value='Add Task' />
				<button onClick={this.clearClick}>Clear</button>
			</form>
		);
	}
}
