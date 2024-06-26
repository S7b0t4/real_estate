import { useState, useEffect } from "react"
import { Wrapper } from './MainPage/Wrapper/Wrapper'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SecondPage from './SecondaryPage/SecondPage'
import AdminPage from './AdminPage/AdminPage'

import axios from 'axios'

const BackLink = "http://localhost:5000/real-estate-backend/"

const App = () => {

  const [testArrForMapProductBlocks, setTestArrForMapProductBlocks] = useState([])

  const getData = async () => {
    await axios.get(BackLink)
      .then((res => {
        setTestArrForMapProductBlocks(res.data)
      }))
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage BackLink={BackLink}/>} />
        <Route  path="/" element={<Wrapper setTestArrForMapProductBlocks={setTestArrForMapProductBlocks} getData={getData} BackLink={BackLink} testArrForMapProductBlocks={testArrForMapProductBlocks} />}/>
        <Route path={"/real-estate/:id"} element={<SecondPage BackLink={BackLink}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App