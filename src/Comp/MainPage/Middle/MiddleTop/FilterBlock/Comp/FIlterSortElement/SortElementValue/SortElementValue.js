import React, { useRef, useState } from 'react'

import './SortElementValue.css' 

const SortElementValue = ({title, minTag, maxTag, filter, setFilter}) => {

  const inputRef1 = useRef()
  const inputRef2 = useRef()

  const handleChange = (index) => {
    if (index === 0) {
      filter.$gte = inputRef1.current.value
      setFilter(filter)
    }
    if (index === 1) {
      filter.$lte = inputRef2.current.value
      setFilter(filter)
    }
    console.log(filter)
  }

	return (
		<div>
			<div>{title}</div>
			<div className='value_element_row'>
				<input className='value_element_input' ref={inputRef1} placeholder={minTag} type="number" onChange={() => handleChange(0)} />
				<input className='value_element_input' ref={inputRef2} placeholder={maxTag} type="number" onChange={() => handleChange(1)} />
			</div>
		</div>
	)
}
export default SortElementValue