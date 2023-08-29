const mapChooseSelection = ({ObjArr, value, onChangeMainBlock}) => {
	const mapChooseSelectionArr = (arr) => {
		return arr.map((obj, index)=>(
			<label className='choose_selection_block_input_colum_row' for={index} onClick={()=>onChangeMainBlock(obj.text)}>
				<input id={index} type="radio" name="field" className="choose_selection_block_input_colum_row_input" value={obj.bool}/>
				<div className='choose_selection_block_input_title'>{obj.text}</div>
			</label>
		))
	}
	if(value){
		return ( 
			<form className='choose_selection_block_input_colum'>
				{
					mapChooseSelectionArr(ObjArr)
				}
			</form>
		);
	}
}
 
export default mapChooseSelection;