import React from 'react'

const MapElement = ({item, changeMainType}) => {
	return (
		<div className='select_block' onClick={()=>changeMainType(item)}>
			{item}
		</div>
	)
}
export default MapElement