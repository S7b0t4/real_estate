import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SecondHeader from './SecondHeader/SecondHeader';
import SecondMain from './SecondMain/SecondMain';
import SecondFooter from './SecondFooter/SecondFooter';
import './SecondPage.css';

const SecondPage = ({ BackLink }) => {
  const { id } = useParams();
  const [itemInfo, setItemInfo] = useState({
    title: "",
    subTitle: "",
    sell: "",
    rent: "",
    squareImg: [],
    mainIMG: [],
    filterTag: ["All"],
    cost: [
      { img: `${BackLink}src/iconBitCoin.svg`, value: false },
      { img: `${BackLink}src/iconTonCoin.svg`, value: false },
      { img: `${BackLink}src/iconEfirCoin.svg`, value: false },
      { img: `${BackLink}src/iconDHCoin.png`, value: false },
      { img: `${BackLink}src/iconBCoin.png`, value: false },
    ],
    infoNumbers: [],
    tag: ['', ''],
    textInfo: [],
    linkInfo: "#",
    compInfo: [
      { title: "", text: "" },
      { title: "", text: "" },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BackLink + id);
        setItemInfo(response.data);
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
      }
    };

    fetchData();
  }, [BackLink, id]);

  return (
    <div>
      <SecondHeader BackLink={BackLink} />
      <SecondMain BackLink={BackLink} itemInfo={itemInfo} />
      <SecondFooter itemInfo={itemInfo} BackLink={BackLink} />
    </div>
  );
};

export default SecondPage;
