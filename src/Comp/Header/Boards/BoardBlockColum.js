import IconBoard from './IconBoard'

import iconArrowBottom from "../../../imgSource/iconArrowBottom.svg"

const BoardBlockColum = ({boardStatus, arrValue, setMainIcon, mainValue, openBoard}) => {
	return ( 
		<div className='block_colum'>
				<div className='block_row' onClick={openBoard}>
					<img src={mainValue.valueIMG} alt="" className="icon_img"/>
					<div className='block_icon_text'>{mainValue.valueText}</div>
					<img src={iconArrowBottom} alt="" />	
				</div>
				<div className='block_colum_gap'>
					<IconBoard onSetMainIcon={(obj)=>setMainIcon(obj)} arrIconValue={arrValue} iconBoardStatus={boardStatus}/>
				</div>
			</div>
	 );
}
 
export default BoardBlockColum;