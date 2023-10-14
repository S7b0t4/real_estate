import { useState, useEffect } from "react";
import { Wrapper } from './MainPage/Wrapper/Wrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from './SecondaryPage/SecondPage';
import Form from "./adminPage/components/Form"


import axios from 'axios';

const BackLink = "http://localhost:5000/"

const App = () => {

  const [testArrForMapProductBlocks, setTestArrForMapProductBlocks] = useState([])

  const getData = async() => {
    await axios.get(BackLink)
    .then((res=>{
      setTestArrForMapProductBlocks(res.data)
    }))
  }

  useEffect(()=>{
    getData()
    console.log(testArrForMapProductBlocks)
  }, [])
  

	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper testArrForMapProductBlocks={testArrForMapProductBlocks}/>}/>
        <Route path="/admin" element={<Form BackLink={BackLink}/>}/>
        <Route path={"/:id"} element={<SecondPage BackLink={BackLink} />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;