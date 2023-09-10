import MiddleTopRow from './MiddleTop/MiddleTopRow';
import MiddleCenter from './MiddleCenter/MiddleCenter'
import { useState } from 'react'

const Midle = ({testArrForMapProductBlocks}) => {
	const [filter, setFilter] = useState()
	return ( 
	<div>
		<MiddleTopRow onGetFilter={(item)=>setFilter(item)} />
		<MiddleCenter filter={filter} testArrForMapProductBlocks={testArrForMapProductBlocks}/> 
	</div>
	);
}
 
export default Midle;