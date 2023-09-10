import "./MiddleTopRowFilterBlock.css"
import iconExit from "../../../../imgSource/iconExit.svg"
import ChooseBlock from './ChooseBlock'

const MiddleTopRowFilterBlock = ({viewParam, onChangeViewParam}) => {

	const chooseSelectionArr1 = [
		{
			text: "All",
		},
		{
			text: "Buy",
		},
		{
			text: "Rent",
		}
	]
	const chooseSelectionArr2 = [
		{
			text: "All",
		},
		{
			text: "Thailand",
		},
		{
			text: "UAE",
		}
	]
	const chooseSelectionArr3 = [
		{
			text: "All",
		},
		{
			text: "Bangkok",
		},
		{
			text: "Dubai",
		},
		{
			text: "Pattaya",
		},
		{
			text: "Samui",
		}
	]

	if(viewParam){
		return ( 
			<div className='middle_top_filter_wrapper'>
				<div className='middle_top_row_filter_block'>
					<div className='middle_top_row_filter_block_colum'>
						<div className='middle_top_row_filter_block_row'>
							<div className='middle_top_row_filter_block_filter_title'>
								Filter
							</div>
							<div onClick={onChangeViewParam} className='middle_top_row_filter_block_filter_exit'>
								<img src={iconExit} alt="" className="" />
							</div>
						</div>
						<ChooseBlock chooseSelectionArr={chooseSelectionArr1} name={"Sort by"}/>
						<ChooseBlock chooseSelectionArr={chooseSelectionArr2} name={"Choose country"}/>
						<ChooseBlock chooseSelectionArr={chooseSelectionArr3} name={"Choose city"}/>
					</div>
				</div>
			</div>
		 );
		}
	} 
export default MiddleTopRowFilterBlock;