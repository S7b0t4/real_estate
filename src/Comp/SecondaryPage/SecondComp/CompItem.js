const CompItem = ({itemInfo}) => {
	return ( 
		<div className='comp_wrapper'>
			<div className="comp_title">{itemInfo.title}</div>
			<div className="comp_text">{itemInfo.text}</div>
		</div>
	);
}
 
export default CompItem;