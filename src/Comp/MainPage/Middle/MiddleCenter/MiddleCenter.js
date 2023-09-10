import MiddleCenterMap from "./MiddleCenterMap"
import "./MiddleCenter.css"

const MiddleCenter = ({filter, testArrForMapProductBlocks}) => {
	return ( 
		<div className='container'>
				<MiddleCenterMap filter={ filter } testArrForMapProductBlocks={testArrForMapProductBlocks} />
		</div>
	 );
}
 
export default MiddleCenter;