import SecondFooterTop from './SecondFooterTop';
import SecondFooterCenter from './SecondFooterCenter';
import SecondFooterBottom from './SecondFooterBottom';
import SecondFooterAdoptive from './SecondFooterAdoptive';
import { useState } from 'react'

const SecondFooter = ({itemInfo, testArrForMapProductBlocks}) => {
	const [mainValue, setMainValue] = useState("about")
	return ( 
		<div className='second_footer_wrapper'>
			<SecondFooterTop onChangeMainValue={(item)=>setMainValue(item)}/>
			<SecondFooterCenter mainValue={mainValue} itemInfo={itemInfo}/>
			<SecondFooterAdoptive itemInfo={itemInfo}/>
			<SecondFooterBottom itemInfo={itemInfo} testArrForMapProductBlocks={testArrForMapProductBlocks}/>
		</div>
	);
}
 
export default SecondFooter;