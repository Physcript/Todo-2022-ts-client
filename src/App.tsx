import { useState, useEffect } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'


import './App.css'

function App() {
	const [ todos,setTodos ] = useState([])
	
	useEffect(() => {
		const loadTodos = async () => {

		}

		loadTodos()
	},[])

	const createTodo =  todoText => {
		console.log(todoText)
	}

	const completeTodo = todoId => {

	}

	const deleteTodo = todoId => {

	}
	
  return (
  	<div>
		<h1> todos </h1>
		<NewTodoForm  onClickCreate = { createTodo } />
		<TodoList 
			todos = { todos }
			onCompleteTodo = { completeTodo }
			onDeleteTodo = { deleteTodo }
		/>
	</div>
  )
}

export default App
