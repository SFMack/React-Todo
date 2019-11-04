import React from 'react';

export default function TodoForm(props) {
	return (
		<>
			<form onSubmit={props.submitTask}>
				<input placeholder='Add a task' onChange={props.changeHandler} />
				<button type='submit' onClick={props.submitClick}>
					Submit
				</button>
				<button onClick={props.clearClick}>Clear</button>
			</form>
		</>
	);
}
