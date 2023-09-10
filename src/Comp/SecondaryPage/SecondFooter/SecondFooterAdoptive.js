import CompItem from "../SecondComp/CompItem"

const SecondFooterAdoptive = ({itemInfo}) => {
	const mapCompItem = itemInfo.compInfo.map((item, index)=>(
		<div key={index}>
			<CompItem itemInfo={item}/>
		</div>
	))
	return ( 
		<div className='adoptive'>
			{mapCompItem}
		</div>
	);
}
 
export default SecondFooterAdoptive;