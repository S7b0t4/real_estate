import SecondFooterMap from "./SecondFooterMap"

const SecondFooterBottom = ({BackLink}) => {
	return ( 
		<div className='second_footer_bottom'>
			<div className='second_footer_bottom_title'>Also be interested</div>
			<SecondFooterMap BackLink={BackLink}/>
		</div>
	);
}
 
export default SecondFooterBottom;