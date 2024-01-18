import MiddleTopRow from './MiddleTop/MiddleTopRow';
import MiddleCenter from './MiddleCenter/MiddleCenter'
import { useState } from 'react'

const Midle = ({ setTestArrForMapProductBlocks, BackLink, getData, testArrForMapProductBlocks}) => {
	const [filter, setFilter] = useState()
	return ( 
	<div>
		<MiddleTopRow setTestArrForMapProductBlocks={setTestArrForMapProductBlocks} BackLink={BackLink} getData={getData} onGetFilter={(item)=>setFilter(item)} />
		<MiddleCenter BackLink={BackLink} getData={getData} filter={filter} testArrForMapProductBlocks={testArrForMapProductBlocks}/> 
	</div>
	);
}
 
export default Midle;