import * as React from "react";
import { Wrapper } from './MainPage/Wrapper/Wrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from './SecondaryPage/SecondPage';


import axios from 'axios';

const Backlink = "http://localhost:5000/"

const App = () => {

  const [testArrForMapProductBlocks, setTestArrForMapProductBlocks] = React.useState([])

  const getData = async() => {
    await axios.get(Backlink)
    .then((res=>{
      setTestArrForMapProductBlocks(res.data)
    }))
  }

  React.useEffect(()=>{
    getData()
    console.log(testArrForMapProductBlocks)
  }, [])

  const mapTestArrForMapProductBlocks = testArrForMapProductBlocks.map(item=>(
    <Route path={"/"+item.link} element={<SecondPage itemInfo={item} testArrForMapProductBlocks={testArrForMapProductBlocks}/>} />
  ))
  

	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper testArrForMapProductBlocks={testArrForMapProductBlocks}/>}/>
        {mapTestArrForMapProductBlocks}
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;