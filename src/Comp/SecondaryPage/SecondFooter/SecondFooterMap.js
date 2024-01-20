import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecondFooterProductBlock from './SecondFooterProductBlock/SecondFooterProductBlock';
import "./SecondFooterMap.css";

const MiddleCenterMap = ({ BackLink }) => {
  const [arrInfo, setArrInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(BackLink + "random");
        setArrInfo(response.data);
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
      }
    };

    getData();
  }, [BackLink]);

  const mapArrWithProductBlocks = arrInfo.map((obj, index) => (
    <SecondFooterProductBlock BackLink={BackLink} prop={obj} index={index} key={index} />
  ));

  return ( 
    <div className='middle_center_map'>
      {mapArrWithProductBlocks}
    </div>
  );
};

export default MiddleCenterMap;
