import React, { useState } from 'react'
import MiddleTopRowFilter from './MiddleTopRowFilter'
import MiddleTopRowFilterBlock from './MiddleTopRowFilterBlock/MiddleTopRowFilterBlock'
import "./MiddleTopRow.css"
import BlackWrapper from "./BlackWrapper"

function MiddleTopRow({onGetFilter}) {
	const [viewParam, setViewParam] = useState(false)

	const ChangeViewParam = () =>{
		setViewParam(!viewParam)
	}

	return (
		<div>
			<BlackWrapper viewParam={viewParam} />
			<div>
				<div className='minddle_top_container'>
					<MiddleTopRowFilterBlock viewParam={viewParam} onChangeViewParam={ChangeViewParam} />
				</div>
				<MiddleTopRowFilter onChangeViewParam={ChangeViewParam} onGetFilter={item=>onGetFilter(item)} />
			</div>
		</div>
	)
}

export default MiddleTopRow
