const SecondFooterTop = ({onChangeMainValue}) => {

	return ( 
		<div className='second_footer_top_wrapper'>
			<div className='second_footer_top_row'>
				<div className="second_footer_top_btn" onClick={()=>onChangeMainValue("about")}>About</div>
				<div className="second_footer_top_btn" onClick={()=>onChangeMainValue("investment")}>investment value</div>
				<div className="second_footer_top_btn" onClick={()=>onChangeMainValue("uniqueness")}>uniqueness</div>
			</div>
		</div>
	);
}
 
export default SecondFooterTop;