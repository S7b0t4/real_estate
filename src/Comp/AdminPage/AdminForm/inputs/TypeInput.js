import React, { useState } from 'react'

const TypeInput = ({ changeType, setInputValue, inputDescription, type }) => {

	const [Type, setType] = useState(type)

	const saveInput = () =>{
		changeType(Type)
		setInputValue(Type)
	}

	const mapType = Type.map((i) => (
		<div className='type_input_row'>
			<div className='input_title'>{i.name}</div>
			<input className='input_checkbox' type="checkbox" onClick={() => { i.value = !i.value; saveInput()}} />
		</div>
	))
	return (
		<div className='colum'>
			<div className='input_title'>{inputDescription}:</div>
			<div>
				{
					mapType
				}
			</div>
		</div>
	)
}
export default TypeInput