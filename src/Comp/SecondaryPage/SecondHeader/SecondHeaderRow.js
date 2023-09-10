import React, { useState } from 'react'

import "./SecondHeaderRow.css"

import BoardBlockColum from './Boards/BoardBlockColum'

import iconENG from "../../imgSource/iconENG.svg"
import iconBTN from "../../imgSource/iconBTC.svg"
import iconEffir from "../../imgSource/iconEffir.svg"
import iconTcoin from "../../imgSource/iconTcoin.svg"
import iconRus from "../../imgSource/iconRus.svg"

const arrCostValue = [
	{
		valueText: "~$21,822.74",
		valueIMG: iconBTN,
	},
	{
		valueText: "~$1,218.31",
		valueIMG: iconEffir,
	},
	{
		valueText: "~$0.9994",
		valueIMG: iconTcoin,
	}
]

const arrLanValue = [
	{
		valueText: "Eng",
		valueIMG: iconENG,
	},
	{
		valueText: "Ru",
		valueIMG: iconRus,
	},
]

export const SecondHeaderRow = () => {

	const [costMainValue, setCostMainValue] = useState({
		valueText: "~$21,822.74",
		valueIMG: iconBTN,
	})
	const [lanMainValue, setLanMainValue] = useState({
		valueText: "Eng",
		valueIMG: iconENG,
	})

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
