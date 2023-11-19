import MiddleCenterMap from "./MiddleCenterMap"
import "./MiddleCenter.css"

const MiddleCenter = ({BackLink, filter, testArrForMapProductBlocks}) => {
	return ( 
		<div className='container'>
				<MiddleCenterMap BackLink={BackLink} filter={ filter } testArrForMapProductBlocks={testArrForMapProductBlocks} />
		</div>
	 );
}
 
export default MiddleCenter;