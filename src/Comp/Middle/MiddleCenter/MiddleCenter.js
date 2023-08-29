import MiddleCenterMap from "./MiddleCenterMap"
import "./MiddleCenter.css"

const MiddleCenter = ({filter}) => {
	return ( 
		<div className='container'>
				<MiddleCenterMap filter={ filter } />
		</div>
	 );
}
 
export default MiddleCenter;