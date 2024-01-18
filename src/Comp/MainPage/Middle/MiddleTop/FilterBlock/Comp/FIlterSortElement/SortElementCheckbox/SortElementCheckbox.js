import React from 'react'

import './SortElementCheckbox.css' 

const SortElementCheckbox = ({title, onChangeValue}) => {
	return (
		<div className='checkbox_element_row'>
			<input className='checkbox_element_input' type="checkbox" onChange={onChangeValue}/>
			<div>{title}</div>
		</div>
	)
}
export default SortElementCheckbox