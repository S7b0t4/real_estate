import IconBoard from './IconBoard'

import iconArrowBottom from "../../../imgSource/iconArrowBottom.svg"

const BoardBlockColum = ({BackLink, boardStatus, arrValue, setMainIcon, mainValue, openBoard}) => {
	return ( 
		<div className='block_colum'>
				<div className='block_row' onClick={openBoard}>
					<img src={BackLink+mainValue.valueIMG} alt="" className="icon_img"/>
					<div className='text'>{mainValue.valueText}</div>
					<img className='icon_arrow' src={iconArrowBottom} alt="" />	
				</div>
				<div className='block_colum_gap'>
					<IconBoard BackLink={BackLink} onSetMainIcon={(obj)=>setMainIcon(obj)} arrIconValue={arrValue} iconBoardStatus={boardStatus}/>
				</div>
			</div>
	 );
}
 
export default BoardBlockColum;