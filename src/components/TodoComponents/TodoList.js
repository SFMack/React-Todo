import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList(props) {
	return (
		<>
			<h1>Don't Forget!</h1>
			<TodoForm />

			{console.log(props.state)}
		</>
	);
}
