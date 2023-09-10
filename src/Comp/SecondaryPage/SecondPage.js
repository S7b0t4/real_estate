import SecondHeader from './SecondHeader/SecondHeader';
import SecondMain from './SecondMain/SecondMain';
import SecondFooter from "./SecondFooter/SecondFooter"
import "./SecondPage.css"

const SecondPage = ({itemInfo, testArrForMapProductBlocks}) => {
	return ( 
		<div>
			<SecondHeader/>
			<SecondMain itemInfo={itemInfo}/>
			<SecondFooter itemInfo={itemInfo} testArrForMapProductBlocks={testArrForMapProductBlocks}/>
		</div>
	);
}
 
export default SecondPage;