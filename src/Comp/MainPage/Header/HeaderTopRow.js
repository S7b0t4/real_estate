import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./HeaderTopRow.css"

import BoardBlockColum from './Boards/BoardBlockColum'

export const HeaderTopRow = ({ BackLink }) => {

	const [arrCostValue, setArrCostValue] = useState([])

	const [costMainValue, setCostMainValue] = useState({})

	const arrLanValue = [
		{
			valueText: "Eng",
			valueIMG: "uploads/iconENG.svg",
		},
		{
			valueText: "Ru",
			valueIMG: "uploads/iconRus.svg",
		},
	]

	const getData = async () => {
		await axios.get(BackLink + "coins")
			.then((res => {
				setArrCostValue(res.data)
				setCostMainValue(res.data[0])
			}))
	}

	useEffect(() => getData(), [])

	const [lanMainValue, setLanMainValue] = useState(arrLanValue[0])

	const costArrValue = arrCostValue.filter((item) => {
		return item.valueText !== costMainValue.valueText
	})
	const lanArrValue = arrLanValue.filter((item) => {
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

	const openCostBoard = () => {
		setCostBoardStatus(!costBoardStatus)
	}
	const openLanBoard = () => {
		setLangBoardStatus(!lanBoardStatus)
	}

	return (
		<div className='header_top_row'>
			<BoardBlockColum BackLink={BackLink} boardStatus={costBoardStatus} arrValue={costArrValue} setMainIcon={(obj) => setCostMainIcon(obj)} mainValue={costMainValue} openBoard={openCostBoard} />
			<BoardBlockColum BackLink={BackLink} boardStatus={lanBoardStatus} arrValue={lanArrValue} setMainIcon={(obj) => setLanMainIcon(obj)} mainValue={lanMainValue} openBoard={openLanBoard} />
		</div>
	)
}
