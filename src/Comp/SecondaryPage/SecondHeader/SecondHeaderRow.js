import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./SecondHeaderRow.css";
import BoardBlockColum from './Boards/BoardBlockColum';

export const SecondHeaderRow = ({ BackLink }) => {
  const [arrCostValue, setArrCostValue] = useState([]);
  const [costMainValue, setCostMainValue] = useState({});
  const arrLanValue = [
    { valueText: "Eng", valueIMG: "uploads/iconENG.svg" },
    { valueText: "Ru", valueIMG: "uploads/iconRus.svg" },
  ];

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

  const [lanMainValue, setLanMainValue] = useState(arrLanValue[0]);

  const costArrValue = arrCostValue.filter((item) => item.valueText !== costMainValue.valueText);
  const lanArrValue = arrLanValue.filter((item) => item.valueText !== lanMainValue.valueText);

  const setCostMainIcon = (obj) => {
    setCostMainValue(obj);
    openCostBoard();
  };

  const setLanMainIcon = (obj) => {
    setLanMainValue(obj);
    openLanBoard();
  };

  const [costBoardStatus, setCostBoardStatus] = useState(false);
  const [lanBoardStatus, setLangBoardStatus] = useState(false);

  const openCostBoard = () => {
    setCostBoardStatus(!costBoardStatus);
  };

  const openLanBoard = () => {
    setLangBoardStatus(!lanBoardStatus);
  };

  return (
    <div className='header_border'>
      <div className='header_top_row'>
        <BoardBlockColum BackLink={BackLink} boardStatus={costBoardStatus} arrValue={costArrValue} setMainIcon={(obj) => setCostMainIcon(obj)} mainValue={costMainValue} openBoard={openCostBoard}/>
        <div className="rainbow_text">
          <div className="rainbow_text_item yellow">showmehome.io</div>
          <div className="rainbow_text_item pink">showmehome.io</div>
          <div className="rainbow_text_item green">showmehome.io</div>
          <div className="rainbow_text_item orange">showmehome.io</div>
        </div>
        <BoardBlockColum BackLink={BackLink} boardStatus={lanBoardStatus} arrValue={lanArrValue} setMainIcon={(obj) => setLanMainIcon(obj)} mainValue={lanMainValue} openBoard={openLanBoard}/>
      </div> 
    </div>
  );
};
