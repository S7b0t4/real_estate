import React, { useState } from 'react'

import './SortElement.css'
import MapElement from './MapElement'

const SortElement = ({title, list, setValue}) => {
	const [vive, setVive] = useState()
	const [mainType, setMainType] = useState("Choose selection")

	const changeVive = () => {
		setVive(!vive)
	}

	const lucky = list.filter((text)=>{
		return text !== mainType;
	});

	const changeValue = (i) => {
		changeVive()
		setMainType(i); 
		setValue(i)
	}

	const elementMap = lucky.map((i, index)=>(
		<MapElement key={index} item={i} changeMainType={(i)=>{changeValue(i)}}/>
	))

	return (
		<div className='select_colum'>
			<div className='sort_element'>{title}</div>
			<div className='select_block_title' onClick={changeVive}>{mainType}</div>
			{vive &&
			<div>
				{elementMap}
			</div>}
		</div>
	)
}
export default SortElement