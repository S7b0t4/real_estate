import MiddleTopRow from './MiddleTop/MiddleTopRow';
import MiddleCenter from './MiddleCenter/MiddleCenter'
import { useState } from 'react'

const Midle = ({BackLink, testArrForMapProductBlocks}) => {
	const [filter, setFilter] = useState()
	return ( 
	<div>
		<MiddleTopRow BackLink={BackLink} onGetFilter={(item)=>setFilter(item)} />
		<MiddleCenter BackLink={BackLink} filter={filter} testArrForMapProductBlocks={testArrForMapProductBlocks}/> 
	</div>
	);
}
 
export default Midle;