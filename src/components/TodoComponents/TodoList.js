import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default class TodoList extends Component {
	render() {
		const { state } = this.props;
		return (
			<>
				<h1>Don't Forget!</h1>
				<TodoForm todo={this.props.state} addtask={this.props.addtask} />
				<div>
					{state.map(todo => (
						<Todo key={todo.id} data={todo} />
					))}
				</div>
			</>
		);
	}
}
