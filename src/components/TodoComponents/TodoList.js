import React from 'react';

export default function TodoList(props) {
	const { array } = props;

	return (
		<>
			<h1>Don't Forget!</h1>
			<div>
				{array.map(todo => (
					<h3 key={todo.task}>{todo.task}</h3>
				))}
			</div>
		</>
	);
}
