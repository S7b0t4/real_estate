import React, { useState } from 'react'

import './SortElementCount.css'

const SortElementCount = ({title}) => {
	const [count, setCount] = useState(1)

	const changeCount = (i) => {
		if (i === "+"){
			setCount(count + 1)
		}
		if(i === "-" && count > 1){
			setCount(count - 1)
		}
	}

	return (
		<div className='count_colum'>
			<div className='count_title'>{title}</div>
			<div className='count_row'>
				<div className='count_block'>
					<button className='count_block_button' onClick={()=>changeCount("+")}>+</button>
				</div>
				<div className='count_block'>{count}</div>
				<div className='count_block'>
					<button className='count_block_button' onClick={()=>changeCount("-")}>-</button>
				</div>
			</div>
		</div>
	)
}
export default SortElementCount