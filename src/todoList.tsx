



import { TodoItemList } from './TodoItemList' 


export function TodoList ( { todos, onCompleteTodo, onDeleteTodo } ) {
	return (
		<div>
			{ todos.map( todo =>  (
				
				<TodoItemList 
					key = { todo.id }
					todo = { todo }
					onClickComplete = { onCompleteTodo }
					onClickDelete = { onDeleteTodo } />  
			)) }
		</div>
	)
}

