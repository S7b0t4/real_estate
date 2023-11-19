import MiddleCenterProductBlock from './MiddleCenterProductBlock/MiddleCenterProductBlock'
import "./MiddleCenterMap.css"

const MiddleCenterMap = ({BackLink, filter, testArrForMapProductBlocks}) => {

	const productBlockFiltering = (filterItem, Filter = "All") => {
		for (var i = 0; i < filterItem.filterTag.length; i++) {
			if (filterItem.filterTag[i] === Filter) {
					return true;
			}
		}
		return false;
	}
	
	const assembling = testArrForMapProductBlocks.filter((productBlock)=>{
		return productBlockFiltering(productBlock, filter)
	})
	
	
	const mapArrWithProductBlocks = assembling.map((obj, index)=>(
		<MiddleCenterProductBlock BackLink={BackLink} prop={obj} index={index} key={index}/>
	))

	return ( 
		<div className='middle_center_map'>
			{
				mapArrWithProductBlocks
			}
		</div>
	);
}
 
export default MiddleCenterMap;