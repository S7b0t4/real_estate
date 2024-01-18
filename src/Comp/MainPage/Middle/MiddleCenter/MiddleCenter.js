import MiddleCenterMap from "./MiddleCenterMap"
import "./MiddleCenter.css"

const MiddleCenter = ({BackLink, filter, getData, testArrForMapProductBlocks}) => {
	return ( 
		<div className='container'>
				<MiddleCenterMap BackLink={BackLink} filter={ filter } getData={getData} testArrForMapProductBlocks={testArrForMapProductBlocks} />
		</div>
	 );
}
 
export default MiddleCenter;