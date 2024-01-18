const About = ({ itemInfo }) => {
	const mapInfoNumber = itemInfo.infoNumbers.map((item, index) => (
		<div className='info_number_item' key={index}>
			<div className="info_number_item_number">{item.value}</div>
			<div className="info_number_item_text">{item.title}</div>
		</div>
	))
	
	const mapTextInfo = itemInfo.textInfo.map((item, index) => (
		<div key={index}>
			{item}
		</div>
	))
	return (
		<div className='about_wrapper'>
			<div className='about_row_info_number'>
				{mapInfoNumber}
			</div>
			<div className='about_text_row'>
				<div className='about_text_row_row'>
					<div className='about_title'>
						About
					</div>
					<div className='about_text_text' >{mapTextInfo}</div>
					<div className='about_text_link' href={itemInfo.linkInfo}>Download presentation (PDF)</div>
				</div>
				<img className='about_text_img' src={itemInfo.iconMapIMG} alt="" />
			</div>
		</div>
	)
}

export default About