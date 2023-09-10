import * as React from "react";
import { Wrapper } from './MainPage/Wrapper/Wrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from './SecondaryPage/SecondPage';

import productBlockIMG from "./imgSource/productBlockIMG.jpg"

import mainIMG from "./imgSource/mainIMG.jpg"
import iconTonCoin from "./imgSource/iconTonCoin.svg"
import iconBitCoin from "./imgSource/iconBitCoin.svg"
import iconBCoin from "./imgSource/iconBCoin.png"
import iconDHCoin from "./imgSource/iconDHCoin.png"
import iconEfirCoin from "./imgSource/iconEfirCoin.svg"

import iconSquare1 from "./imgSource/iconSquare1.jpg"
import iconSquare2 from "./imgSource/iconSquare2.jpg"
import iconSquare3 from "./imgSource/iconSquare3.jpg"
import iconSquare4 from "./imgSource/iconSquare4.jpg"
import iconSquare5 from "./imgSource/iconSquare5.jpg"
import iconSquare6 from "./imgSource/iconSquare6.jpg"
import iconSquare7 from "./imgSource/iconSquare7.jpg"

import iconMainIMG1 from "./imgSource/iconMainIMG1.jpg"
import iconMapIMG from "./imgSource/iconMapIMG.jpg"

const App = () => {
  const testArrForMapProductBlocks = [
    {
      title: "Modern Villa 55 with Pool",
      subTitle: "Al Marsa Street, 66, Dubai",
      sell: "105,56",
      rent: "2,5",
      link: "1",
      img: [productBlockIMG,mainIMG] ,
      squareImg: [iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7, iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7, iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7],
      mainIMG: [iconMainIMG1,iconMainIMG1,iconMainIMG1,iconMainIMG1],
      filterTag: ["All"],
      compInfo: [
        {
          title: "investment value",
          text: "There will be more information here (graph and text)."
        },
        {
          title: "uniqueness",
          text: "There will be more information here (photo and text)."
        } 
      ],
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
      infoNumber:[
        {
          text:"construction year",
          Num:2022,
        },
        {
          text:"floors",
          Num:3,
        },
        {
          text:"Total building area",
          Num:800,
        },
        {
          text:"Total living area",
          Num:136,
        },
        {
          text:" bedrooms",
          Num:5,
        },
        {
          text:"parking spaces",
          Num:245,
        }
      ],
      iconMapIMG: iconMapIMG,
      tag: [
        'Famous designer',
        'Good invest'
      ], 
      textInfo:[
        "The 77-storey tower rises in the heart of The Opera District, only steps away from the iconic Dubai Opera. Residents can experience life in spacious, masterfully crafted apartments with an unparalleled breadth of amenities surrounded by spellbinding views and year round entertainment.",
        "All residents of these towers will have access to a dedicated concierge desk in the lobby. A separate entrance for the staff will assure the smoothest traffic flow.",
        "The generous living room at this tower is a gorgeous place for entertaining, dining or simply soaking in the views over Dubai’s ever astounding Burj Khalifa. Full-height window walls cast views across Downtown Dubai and the city beyond. ",

      ],
      linkInfo: "#",
    },
    {
      title: "Modern Villa 55 with Pool",
      subTitle: "Al Marsa Street, 66, Dubai",
      sell: "105,56",
      rent: "2,5",
      link: "2",
      img: [productBlockIMG,mainIMG] ,
      squareImg: [iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7, iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7, iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7],
      mainIMG: [iconMainIMG1,iconMainIMG1,iconMainIMG1,iconMainIMG1],
      filterTag: ["All"],
      compInfo: [
        {
          title: "investment value",
          text: "There will be more information here (graph and text)."
        },
        {
          title: "uniqueness",
          text: "There will be more information here (photo and text)."
        } 
      ],
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
      infoNumber:[
        {
          text:"construction year",
          Num:2022,
        },
        {
          text:"floors",
          Num:3,
        },
        {
          text:"Total building area",
          Num:800,
        },
        {
          text:"Total living area",
          Num:136,
        },
        {
          text:" bedrooms",
          Num:5,
        },
        {
          text:"parking spaces",
          Num:245,
        }
      ],
      iconMapIMG: iconMapIMG,
      tag: [
        'Famous designer',
        'Good invest'
      ], 
      textInfo:[
        "The 77-storey tower rises in the heart of The Opera District, only steps away from the iconic Dubai Opera. Residents can experience life in spacious, masterfully crafted apartments with an unparalleled breadth of amenities surrounded by spellbinding views and year round entertainment.",
        "All residents of these towers will have access to a dedicated concierge desk in the lobby. A separate entrance for the staff will assure the smoothest traffic flow.",
        "The generous living room at this tower is a gorgeous place for entertaining, dining or simply soaking in the views over Dubai’s ever astounding Burj Khalifa. Full-height window walls cast views across Downtown Dubai and the city beyond. ",

      ],
      linkInfo: "#",
    },
    {
      title: "Modern Villa 55 with Pool",
      subTitle: "Al Marsa Street, 66, Dubai",
      sell: "105,56",
      rent: "2,5",
      link: "3",
      img: [productBlockIMG,mainIMG] ,
      squareImg: [iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7, iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7, iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7],
      mainIMG: [iconMainIMG1,iconMainIMG1,iconMainIMG1,iconMainIMG1],
      filterTag: ["All"],
      compInfo: [
        {
          title: "investment value",
          text: "There will be more information here (graph and text)."
        },
        {
          title: "uniqueness",
          text: "There will be more information here (photo and text)."
        } 
      ],
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
      infoNumber:[
        {
          text:"construction year",
          Num:2022,
        },
        {
          text:"floors",
          Num:3,
        },
        {
          text:"Total building area",
          Num:800,
        },
        {
          text:"Total living area",
          Num:136,
        },
        {
          text:" bedrooms",
          Num:5,
        },
        {
          text:"parking spaces",
          Num:245,
        }
      ],
      iconMapIMG: iconMapIMG,
      tag: [
        'Famous designer',
        'Good invest'
      ], 
      textInfo:[
        "The 77-storey tower rises in the heart of The Opera District, only steps away from the iconic Dubai Opera. Residents can experience life in spacious, masterfully crafted apartments with an unparalleled breadth of amenities surrounded by spellbinding views and year round entertainment.",
        "All residents of these towers will have access to a dedicated concierge desk in the lobby. A separate entrance for the staff will assure the smoothest traffic flow.",
        "The generous living room at this tower is a gorgeous place for entertaining, dining or simply soaking in the views over Dubai’s ever astounding Burj Khalifa. Full-height window walls cast views across Downtown Dubai and the city beyond. ",

      ],
      linkInfo: "#",
    },
    {
      title: "Modern Villa 55 with Pool",
      subTitle: "Al Marsa Street, 66, Dubai",
      sell: "105,56",
      rent: "2,5",
      link: "4",
      img: [productBlockIMG,mainIMG] ,
      squareImg: [iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7, iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7, iconSquare1,iconSquare2, iconSquare3, iconSquare4, iconSquare5, iconSquare6, iconSquare7],
      mainIMG: [iconMainIMG1,iconMainIMG1,iconMainIMG1,iconMainIMG1],
      filterTag: ["All"],
      compInfo: [
        {
          title: "investment value",
          text: "There will be more information here (graph and text)."
        },
        {
          title: "uniqueness",
          text: "There will be more information here (photo and text)."
        } 
      ],
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
      infoNumber:[
        {
          text:"construction year",
          Num:2022,
        },
        {
          text:"floors",
          Num:3,
        },
        {
          text:"Total building area",
          Num:800,
        },
        {
          text:"Total living area",
          Num:136,
        },
        {
          text:" bedrooms",
          Num:5,
        },
        {
          text:"parking spaces",
          Num:245,
        }
      ],
      iconMapIMG: iconMapIMG,
      tag: [
        'Famous designer',
        'Good invest'
      ], 
      textInfo:[
        "The 77-storey tower rises in the heart of The Opera District, only steps away from the iconic Dubai Opera. Residents can experience life in spacious, masterfully crafted apartments with an unparalleled breadth of amenities surrounded by spellbinding views and year round entertainment.",
        "All residents of these towers will have access to a dedicated concierge desk in the lobby. A separate entrance for the staff will assure the smoothest traffic flow.",
        "The generous living room at this tower is a gorgeous place for entertaining, dining or simply soaking in the views over Dubai’s ever astounding Burj Khalifa. Full-height window walls cast views across Downtown Dubai and the city beyond. ",

      ],
      linkInfo: "#",
    },
  ]
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper testArrForMapProductBlocks={testArrForMapProductBlocks}/>} />
        {testArrForMapProductBlocks.map(item=>(
          <Route path={"/"+item.link} element={<SecondPage itemInfo={item} testArrForMapProductBlocks={testArrForMapProductBlocks}/>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;