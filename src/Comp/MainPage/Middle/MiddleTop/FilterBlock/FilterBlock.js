import React from 'react'

import './FilterBlock.css'

import CrossSVG from './Comp/CrossSVG'

import SortElement from './Comp/FIlterSortElement/SortElement/SortElement'
import SortElementMinMax from './Comp/FIlterSortElement/SortElementMinMax/SortElementMinMax'
import SortElementCount from './Comp/FIlterSortElement/SortElementCount/SortElementCount'

const array = [
	{
		"type": "type",
		"title": "Sort by",
		"list": ["All", "Buy", "Rent"]
	},
	{
		"type": "type",
		"title": "Choose country",
		"list": ["All", "Thailand", "UAE"]
	},
	{
		"type": "type",
		"title": "Choose city",
		"list": ["All", "Bangkok", "Dubai", "Pattaya", "Samui"]
	},
	{
		"type": "minMax",
		"title": "Price range (BTC)",
		"minTag": "0,99",
		"maxTag": "999999",
		"moreElement": [
			{
				"title":"I don’t care",
				"value":false
			}
		]
	},
	{
		"type": "minMax",
		"title": "Year of construction",
		"minTag": "Since",
		"maxTag": "Till",
		"moreElement": [
			{
				"title":"Ready to move in",
				"value":false
			},
			{
				"title":"Still being built",
				"value":false
			}
		]
	},
	{
		"type": "minMax",
		"minTag": "Min",
		"maxTag": "Max",
		"title": "Square (m )",
		"moreElement": []
	},
	{
		"type": "Count",
		"title": "Bedrooms",
	},
]

const ArrayMap = array.map((i) => {
	if (i.type === "type") {
		return (<SortElement title={i.title} selectBy={i.list}/>)
	}
	if (i.type === "minMax") {
		return (<SortElementMinMax minTag={i.minTag} maxTag={i.maxTag} title={i.title} moreElement={i.moreElement}/>)
	}
	if (i.type === "Count") {
		return (<SortElementCount minTag={i.minTag} maxTag={i.maxTag} title={i.title} moreElement={i.moreElement}/>)
	}
})

const getInfo = () => {

}

const FilterBlock = ({ ChangeViewParam }) => {
	return (
		<div className='filter_block'>
			<div className='filter_block_row' >
				<div className='filter_block_row_title'>
					FILTER
				</div>
				<button className='filter_block_row_button' onClick={ChangeViewParam} alt="cross" d>
					<CrossSVG />
				</button>
			</div>
			<div className='filter_block_colum' >
				{ArrayMap}
			</div>
			<div className='filter_button_row'>
				<button className='filter_button' onClick={getInfo}>Confirm</button>
			</div>
		</div>
	)
}
export default FilterBlock