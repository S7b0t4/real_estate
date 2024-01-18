import React, { useState } from 'react'
import MiddleTopRowFilter from './MiddleTopRowFilter'
import "./MiddleTopRow.css"
import FilterWrapper from './FilterBlock/FilterWrapper'

function MiddleTopRow({ setTestArrForMapProductBlocks, BackLink, getData, onGetFilter}) {
	const [viewParam, setViewParam] = useState(false)

	const ChangeViewParam = () =>{
		setViewParam(!viewParam)
	}

	return (
		<div>
			<div>
				<div className='middle_top_container'>
					<FilterWrapper setTestArrForMapProductBlocks={setTestArrForMapProductBlocks} BackLink={BackLink} viewParam={viewParam} ChangeViewParam={ChangeViewParam}/>
				</div>
				<MiddleTopRowFilter setTestArrForMapProductBlocks={setTestArrForMapProductBlocks} BackLink={BackLink} onChangeViewParam={ChangeViewParam} onGetFilter={item=>onGetFilter(item)} />
			</div>
		</div>
	)
}

export default MiddleTopRow
