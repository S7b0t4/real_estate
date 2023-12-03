import React from 'react'

import FilterBlock from './FilterBlock'

import './FilterWrapper.css' 

const FilterWrapper = ({viewParam, ChangeViewParam}) => {
	if (viewParam){
		return (
			<div className='filter_block_bg'>
				<FilterBlock ChangeViewParam={ChangeViewParam}/>
			</div>
		)
	}
}
export default FilterWrapper