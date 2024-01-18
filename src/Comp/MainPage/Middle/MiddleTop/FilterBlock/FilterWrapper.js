import React from 'react'

import FilterBlock from './FilterBlock'

import './FilterWrapper.css' 

const FilterWrapper = ({ setTestArrForMapProductBlocks, BackLink, viewParam, ChangeViewParam}) => {
	if (viewParam){
		return (
			<div className='filter_block_bg' onClick={ChangeViewParam}>
				<FilterBlock setTestArrForMapProductBlocks={setTestArrForMapProductBlocks} BackLink={BackLink} ChangeViewParam={ChangeViewParam}/>
			</div>
		)
	}
}
export default FilterWrapper