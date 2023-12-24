import { useState } from 'react'
import "./AdminForm.css"
import axios from 'axios'

import TextAreaInput from "./inputs/TextAreaInput"
import TextInput from './inputs/TextInput'
import TypeInput from './inputs/TypeInput'
import IMGInput from './inputs/IMGInput'
import FilterInput from "./inputs/FilterInput"
import MoneyTypeInput from "./inputs/MoneyTypeInput"

const AdminForm = ({ BackLink }) => {

  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [sell, setSell] = useState("")
  const [rent, setRent] = useState("")
  const [squareImg, setSquareImg] = useState([])
  const [mainIMG, setMainIMG] = useState()
  const [iconMapIMG, setIconMapIMG] = useState()
  const [filterTag, setFilterTag] = useState(["All"])
  const [linkInfo,  setLinkInfo] = useState("#")
  const [textInfo,  setTextInfo] = useState("")
  const [type, setType] = useState([
    {
      name: "sell",
      value: false
    },
    {
      name: "rent",
      value: false
    },
  ])
  const [cost, setCost] = useState([
    {
      img: `iconBitCoin.svg`,
      value: false,
    },
    {
      img: `iconTonCoin.svg`,
      value: false,
    },
    {
      img: `iconEfirCoin.svg`,
      value: false,
    },
    {
      img: `iconDHCoin.png`,
      value: false,
    },
    {
      img: `iconBCoin.png`,
      value: false,
    },
  ])
  const [infoNumber, setInfoNumber] = useState([
    {
      text: "",
      Num: "",
    },
  ])
  const [tag, setTag] = useState([
    '',
    ''
  ])
  const [compInfo,  setCompInfo] = useState([
    {
      title: "",
      text: ""
    },
    {
      title: "",
      text: ""
    }
  ])

  const postObj = () => {
    axios.post(BackLink, { title, subTitle, type, sell, rent, squareImg, mainIMG, filterTag, compInfo, cost, infoNumber, iconMapIMG, tag, textInfo, linkInfo })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const saveForm = () => {
    console.log("seve")
    console.log(title, subTitle, type, sell, rent, squareImg, mainIMG, filterTag, compInfo, cost, infoNumber, iconMapIMG, tag, textInfo, linkInfo)
    postObj()
  }

  const filterTagHandleButtonClick = (value) => {
    const newArray = [...filterTag]
    const index = newArray.indexOf(value)
    if (index !== -1) {
      newArray.splice(index, 1)
    } else {
      newArray.push(value)
    }
    setFilterTag(newArray)
  }

  
  const typeUpdateBooleanValue = (i) => {
    setType(prevArray =>
      prevArray.map(item =>
         item.name === i ? { ...item, value: !item.value } : item
       )
     );
   };

  return (
    <div className='admin_form_colum'>
      <FilterInput inputDescription={"Select type of realEstate"} handleButtonClick={(value) => filterTagHandleButtonClick(value)} filterTag={filterTag} />
      <TextInput className="admin_form_title" inputDescription={"Title"} setInputValue={(value) => setTitle(value)} />
      <TextInput className="admin_form_subtitle" inputDescription={"Address"} setInputValue={(value) => setSubTitle(value)} />
      <TypeInput type={type} inputDescription={"Sell type"} updateBooleanValue={(value) => {typeUpdateBooleanValue(value)}} />
      {type[0].value && <TextInput inputDescription={`How many cost for sell`} setInputValue={(value) => setSell(value)} />}
      {type[1].value && <TextInput inputDescription={`How many cost for rent`} setInputValue={(value) => setRent(value)} />}
      <IMGInput BackLink={BackLink} inputDescription={"Select main IMG"} inputMultiple changeEvent={(event) => setMainIMG(event)} />
      <IMGInput BackLink={BackLink} inputDescription={"Select square IMG"} inputMultiple changeEvent={(event) => setSquareImg(event)} />
      <IMGInput BackLink={BackLink} inputDescription={"Select map IMG"} inputMultiple={false} changeEvent={(event) => setIconMapIMG(event)} />
      <MoneyTypeInput BackLink={BackLink} inputDescription={"Cost money"} cost={cost} />
      <TextAreaInput inputDescription={"Description"} setInputValue={(value) => setTextInfo(value)} />
      <div>
        <button className='mainButton' onClick={saveForm}>Save</button>
      </div>
    </div>
  )
}

export default AdminForm