export function TodoItemList({ todo,onClickComplete,onClickDelete }) {	
	return (
		<div>
			<h3>{ todo.item }</h3>
			{ todo.isComplete &&  <p>Complete</p> }
			<button onClick = { () => onClickComplete(todo.id) }>Mark as Completed</button>
			<button onClick = { () => onClickDelete(todo.id) }>Delete</button>
		</div>
	)
}
