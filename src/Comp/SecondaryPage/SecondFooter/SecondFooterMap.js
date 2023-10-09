import SecondFooterProductBlock from './SecondFooterProductBlock/SecondFooterProductBlock'
import "./SecondFooterMap.css"

const MiddleCenterMap = ({testArrForMapProductBlocks}) => {

	const productBlockFiltering = (filterItem, Filter = "All") => {
		for (let i = 0; i < filterItem.filterTag.length; i++) {
			if (filterItem.filterTag[i] === Filter) {
					return true;
			}
		}
		return false;
	}
	
	const assembling = testArrForMapProductBlocks.filter((productBlock)=>{
		return productBlockFiltering(productBlock)
	})

	function getRandomElementsFromArray(arr, numElements) {
		numElements = Math.min(numElements, arr.length);
		const copyArray = [...arr];
		const randomElements = [];
		for (let i = 0; i < numElements; i++) {
			const randomIndex = Math.floor(Math.random() * copyArray.length);
			randomElements.push(copyArray.splice(randomIndex, 1)[0]);
		}
		return randomElements;
	}
	
	const randomElements = getRandomElementsFromArray(testArrForMapProductBlocks, 4);
	
	const mapArrWithProductBlocks = randomElements.map((obj, index)=>(
		<SecondFooterProductBlock prop={obj} index={index} key={index}/>
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