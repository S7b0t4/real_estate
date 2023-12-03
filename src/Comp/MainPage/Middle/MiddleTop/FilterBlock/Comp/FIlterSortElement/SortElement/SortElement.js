import React, { useState } from 'react'

import './SortElement.css'
import MapElement from './MapElement'

const SortElement = ({title, selectBy}) => {
	const [vive, setVive] = useState()
	const [mainType, setMainType] = useState("Choose selection")

	const changeVive = () => {
		setVive(!vive)
	}

	const lucky = selectBy.filter((text)=>{
		return text !== mainType;
	});

	const elementMap = lucky.map((i)=>(
		<MapElement item={i} changeMainType={(i)=>{setMainType(i); changeVive()}}/>
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