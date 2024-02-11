import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./HeaderTopRow.css"

import BoardBlockColum from './Boards/BoardBlockColum'

export const HeaderTopRow = ({ BackLink, arrLanValue, setLanMainValue, lanMainValue }) => {

	const [arrCostValue, setArrCostValue] = useState([])

	const [costMainValue, setCostMainValue] = useState({})

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(BackLink + "coins");
				setArrCostValue(response.data);
				setCostMainValue(response.data[0]);
			} catch (error) {
				console.error('Ошибка при отправке запроса:', error);
			}
		};
	
		getData();
	}, [BackLink]);

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
