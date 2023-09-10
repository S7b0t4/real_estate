import SecondFooterMap from "./SecondFooterMap"

const SecondFooterBottom = ({itemInfo, testArrForMapProductBlocks}) => {
	return ( 
		<div className='second_footer_bottom'>
			<div className='second_footer_bottom_title'>Also be interested</div>
			<SecondFooterMap testArrForMapProductBlocks={testArrForMapProductBlocks}/>
		</div>
	);
}
 
export default SecondFooterBottom;