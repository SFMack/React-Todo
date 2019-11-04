import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
	constructor() {
		super();
		this.state = { name: 'Ya BOY!' };
	}

	render() {
		return (
			<div>
				<TodoList state={this.state} />
			</div>
		);
	}
}

export default App;
