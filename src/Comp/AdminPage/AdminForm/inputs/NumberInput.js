import React from 'react'
import { useRef } from 'react'

const NumberInput = ({inputDescription, setInputValue, index, setSquares, setYearOfConstruction, setBedrooms}) => {

	const input = useRef()

	return (
		<input className='input' ref={input} placeholder={inputDescription} type="number" onChange={() => {setInputValue(input.current.value); if (index === 0){setYearOfConstruction(input.current.value)}; if (index === 2){setSquares(input.current.value)}; if (index === 0){setYearOfConstruction(input.current.value)}; if (index === 4){setBedrooms(input.current.value)}}} />
	)
}
export default NumberInput