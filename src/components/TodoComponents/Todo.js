import React from 'react';

export default function Todo(props) {
	const { task } = props.data;
	return (
		<div>
			<h3>{task}</h3>
		</div>
	);
}
