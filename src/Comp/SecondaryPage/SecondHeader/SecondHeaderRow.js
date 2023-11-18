import React, { useState, useEffect } from 'react'
import axios from 'axios'

import "./SecondHeaderRow.css"

import BoardBlockColum from './Boards/BoardBlockColum'



export const SecondHeaderRow = () => {

	const [arrCostValue, setArrCostValue] = useState([])

	const [costMainValue, setCostMainValue] = useState({})

	const arrLanValue = [
		{
			valueText: "Eng",
			valueIMG: "http://localhost:5000/uploads/iconENG.svg",
		},
		{
			valueText: "Ru",
			valueIMG: "http://localhost:5000/uploads/iconRus.svg",
		},
	]

	const getData = async () => {
		await axios.get("http://localhost:5000/coins")
			.then((res => {
				setArrCostValue(res.data)
				setCostMainValue(res.data[0])
			}))
	}

	useEffect(() => getData(), [])

	const [lanMainValue, setLanMainValue] = useState(arrLanValue[0])

	const costArrValue = arrCostValue.filter((item)=>{
		return item.valueText !== costMainValue.valueText
	})
	const lanArrValue = arrLanValue.filter((item)=>{
		return item.valueText !== lanMainValue.valueText
	})

 	const setCostMainIcon = (obj) => {
		setCostMainValue(obj)
		openCostBoard()
 	}
	 const setLanMainIcon = (obj) => {
		setLanMainValue(obj)
		openLanBoard()
 	}

	const [costBoardStatus, setCostBoardStatus] = useState(false)
	const [lanBoardStatus, setLangBoardStatus] = useState(false)

	const openCostBoard = () =>{
		setCostBoardStatus(!costBoardStatus)
	}
	const openLanBoard = () =>{
		setLangBoardStatus(!lanBoardStatus)
	}

	return (
		<div className='header_border'>
			<div className='header_top_row'>
				<BoardBlockColum boardStatus={costBoardStatus} arrValue={costArrValue} setMainIcon={(obj)=>setCostMainIcon(obj)} mainValue={costMainValue} openBoard={openCostBoard}/>
				<div className="rainbow_text">
					<div className="rainbow_text_item yellow">showmehome.io</div>
					<div className="rainbow_text_item pink">showmehome.io</div>
					<div className="rainbow_text_item green">showmehome.io</div>
					<div className="rainbow_text_item orange">showmehome.io</div>
				</div>
				<BoardBlockColum boardStatus={lanBoardStatus} arrValue={lanArrValue} setMainIcon={(obj)=>setLanMainIcon(obj)} mainValue={lanMainValue} openBoard={openLanBoard}/>
			</div> 
		</div>
	)
}
