import SecondFooterTop from './SecondFooterTop';
import SecondFooterCenter from './SecondFooterCenter';
import SecondFooterBottom from './SecondFooterBottom';
import SecondFooterAdoptive from './SecondFooterAdoptive';
import { useState } from 'react'

import "./SecondFooter.css"

const SecondFooter = ({itemInfo, BackLink}) => {
	const [mainValue, setMainValue] = useState("about")
	return ( 
		<div className='second_footer_wrapper'>
			<SecondFooterTop onChangeMainValue={(item)=>setMainValue(item)}/>
			<SecondFooterCenter BackLink={BackLink} mainValue={mainValue} itemInfo={itemInfo}/>
			<SecondFooterAdoptive itemInfo={itemInfo}/>
			<SecondFooterBottom BackLink={BackLink}/>
		</div>
	);
}
 
export default SecondFooter;