import React from 'react'
import { useRef } from 'react'

const SearchInput = ({ onSearch, onChange }) => {
	const ref = useRef()

	return (
		<div>
			<input ref={ref} type="text" onChange={() => {onChange(ref.current.value)}} />
			<button onClick={onSearch}>Search</button>
		</div>
	)
}
export default SearchInput