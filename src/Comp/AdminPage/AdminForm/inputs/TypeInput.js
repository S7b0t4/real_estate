import React from 'react'

const TypeInput = ({ inputDescription, type }) => {
	const mapType = type.map((i) => (
		<div className='type_input_row'>
			<div className='input_title'>{i.name}</div>
			<input className='input_checkbox' type="checkbox" onClick={() => {i.value = !i.value}}/>
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