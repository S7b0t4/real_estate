import React, { useRef, useState } from 'react'

import './SortElementMinMax.css'

const SortElementMinMax = ({title, minTag, maxTag, moreElement}) => {
	const [min, setMin] = useState()
	const [max, setMax] = useState()
	const [status, setStatus] = useState(moreElement)

	const minRef = useRef()
	const maxRef = useRef()

	const moreElementMap = status.map((i) => (
		<div className='more_element'>
			<input className='more_element_input' type="checkbox" onClick={()=>i.value = !i.value}/>
			<div className='more_element_text'>
				{i.title}
			</div>
		</div>
	))

	return (
		<div className='select_colum'>
			<div className='sort_element'>{title}</div>
			<div className='select_row'>
				<input className='select_input' ref={minRef} placeholder={minTag} onChange={()=>setMin(minRef.current.value)}></input>
				<input className='select_input' ref={maxRef} placeholder={maxTag} onChange={()=>setMax(maxRef.current.value)}></input>
			</div>
			{moreElementMap}
		</div>
	)
}
export default SortElementMinMax