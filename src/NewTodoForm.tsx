
import { useState } from 'react'

export function NewTodoForm ({ onClickCreate }) {
	
	const [ inputValue,setInputValue ] = useState('')


	return (
		<div>

			<input 
				type = "text"
				placeholder = "Enter new todo"
				value = { inputValue }
				onChange = { e => setInputValue(e.target.value) }
			/>
			<button onClick = { () => {
				onClickCreate(inputValue)
				setInputValue('')
			}}>Create</button>
		</div>
	)
}
