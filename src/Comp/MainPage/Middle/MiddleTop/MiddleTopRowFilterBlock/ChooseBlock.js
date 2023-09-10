import { useState } from 'react'
import iconArrowExit from "../../../../imgSource/iconArrowExit.svg"
import MapChooseSelection from './MapChooseSelection'

const ChooseBlock = ({chooseSelectionArr, name}) => {
	const[chooseBlock, setChooseBlock] = useState(false)
	const[changeMainBlock, setChangeMainBlock] = useState("Choose selection")

	const changeChooseBlock = () =>{
		setChooseBlock(!chooseBlock)
	}
	const onChangeMainBlock = (MainName) => {
		setChangeMainBlock(MainName)
		changeChooseBlock()
	}

	return ( 
		<div className='choose_selection_block'>
			<div className='choose_selection_block_title'>
				{name}
			</div>
			<div className='choose_selection_block_input_block'>
				<div className='choose_selection_block_input_row' onClick={changeChooseBlock}>
					<div className='choose_selection_block_input_title'>{changeMainBlock}</div>
					<div className="choose_selection_block_input_exit">
						<img src={iconArrowExit} alt="" />
					</div>
				</div>
				<MapChooseSelection ObjArr={chooseSelectionArr} value={chooseBlock} onChangeMainBlock={(name)=>onChangeMainBlock(name)}/>
			</div>
		</div>
	);
}
 
export default ChooseBlock;