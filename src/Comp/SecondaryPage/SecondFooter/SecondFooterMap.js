import SecondFooterProductBlock from './SecondFooterProductBlock/SecondFooterProductBlock'
import "./SecondFooterMap.css"
import { useState, useEffect } from 'react';
import axios from 'axios'

const MiddleCenterMap = ({BackLink}) => {

	const [arrInfo, setArrInfo] = useState([])

  useEffect((BackLink)=>{
		const getData = async() => {
			console.log(BackLink+"random")
			await axios.get(BackLink+"random")
			.then((res=>{
				console.log(res.data)
				setArrInfo(res.data)
			}))
		}
		
    getData()
  }, [])
	
	const mapArrWithProductBlocks = arrInfo.map((obj, index)=>(
		<SecondFooterProductBlock BackLink={BackLink} prop={obj} index={index} key={index}/>
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