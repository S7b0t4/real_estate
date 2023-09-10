const IconBoard = ({onSetMainIcon, iconBoardStatus, arrIconValue}) => {
	if(iconBoardStatus){
		return (
			arrIconValue.map((obj, index)=>(
				<div className='block_row' onClick={()=>onSetMainIcon(obj, index) } key={index}>
					<img src={obj.valueIMG} alt="" className="icon_img"/>
					<div className='text'>{obj.valueText}</div>
				</div>
			))
		);
	}
}
 
export default IconBoard;