const IconBoard = ({ BackLink, onSetMainIcon, iconBoardStatus, arrIconValue }) => {
	if (iconBoardStatus) {
		return (
			arrIconValue.map((obj, index) => (
				<div className='block_row' onClick={() => onSetMainIcon(obj, index)} key={index}>
					<img src={BackLink + obj.valueIMG} alt="" className="icon_img" />
					<div className='block_icon_text'>{obj.valueText}</div>
				</div>
			))
		)
	}
}

export default IconBoard