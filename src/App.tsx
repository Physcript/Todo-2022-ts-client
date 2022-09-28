import { useState, useEffect } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'


import './App.css'

function App() {
	const [ todos,setTodos ] = useState([])


    	
	useEffect(() => {
		const loadTodos = async () => {
			const url = 'http://localhost:8080/todos'
			const method = 'get'
			const _request = new Request(url,{
				method,
				headers: { "Content-Type": "application/json" }
			})

			fetch(_request)
				.then((val) => { 
					if(val.status === 200) {
				        	console.log(`200`)
						val.json().then((res) => { 
							setTodos(res.message.todo)
						})
					}


				})
				
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
