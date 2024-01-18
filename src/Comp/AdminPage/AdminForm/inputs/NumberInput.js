import React from 'react'
import { useRef } from 'react'

const NumberInput = ({inputDescription, setInputValue}) => {

	const input = useRef()

	return (
		<input className='input' ref={input} placeholder={inputDescription} type="number" onChange={() => setInputValue(input.current.value)} />
	)
}
export default NumberInput