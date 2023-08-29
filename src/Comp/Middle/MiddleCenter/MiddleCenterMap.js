import productBlockIMG from "../../../imgSource/productBlockIMG.jpg"
import MiddleCenterProductBlock from './MiddleCenterProductBlock/MiddleCenterProductBlock'
import "./MiddleCenterMap.css"
import mainIMG from "../../../imgSource/mainIMG.jpg"
import iconTonCoin from "../../../imgSource/iconTonCoin.svg"
import iconBitCoin from "../../../imgSource/iconBitCoin.svg"
import iconBCoin from "../../../imgSource/iconBCoin.png"
import iconDHCoin from "../../../imgSource/iconDHCoin.png"
import iconEfirCoin from "../../../imgSource/iconEfirCoin.svg"


const testArrForMapProductBlocks = [
	{
		title: "Modern Villa 55 with Pool",
		subTitle: "Al Marsa Street, 66, Dubai",
		sell: "105,56",
		rent: "2,5",
		link: "",
		img: [productBlockIMG,mainIMG] ,
		filterTag: ["All"],
		cost: [
			{
				img: iconBitCoin,
				value: true,
			},
			{
				img: iconTonCoin,
				value: false,
			},
			{
				img: iconEfirCoin,
				value: true,
			},
			{
				img: iconDHCoin,
				value: false,
			},
			{
				img: iconBCoin,
				value: false,
			},
		],
		tag: [
			'Famous designer',
			'Good invest'
		]
	},
	{
		title: "Modern Villa 55 with Pool",
		subTitle: "Al Marsa Street, 66, Dubai",
		sell: "105,56",
		rent: "2,5",
		link: "",
		img: [productBlockIMG,mainIMG] ,
		filterTag: ["All"],
		cost: [
			{
				img: iconBitCoin,
				value: true,
			},
			{
				img: iconTonCoin,
				value: false,
			},
			{
				img: iconEfirCoin,
				value: true,
			},
			{
				img: iconDHCoin,
				value: false,
			},
			{
				img: iconBCoin,
				value: false,
			},
		],
		tag: [
			'Famous designer',
			'Good invest'
		]
	},
	{
		title: "Modern Villa 55 with Pool",
		subTitle: "Al Marsa Street, 66, Dubai",
		sell: "105,56",
		rent: "2,5",
		link: "",
		img: [productBlockIMG,mainIMG] ,
		filterTag: ["All"],
		cost: [
			{
				img: iconBitCoin,
				value: true,
			},
			{
				img: iconTonCoin,
				value: false,
			},
			{
				img: iconEfirCoin,
				value: true,
			},
			{
				img: iconDHCoin,
				value: false,
			},
			{
				img: iconBCoin,
				value: false,
			},
		],
		tag: [
			'Famous designer',
			'Good invest'
		]
	},
]

const MiddleCenterMap = ({filter}) => {

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
		<MiddleCenterProductBlock prop={obj} index={index} key={index}/>
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