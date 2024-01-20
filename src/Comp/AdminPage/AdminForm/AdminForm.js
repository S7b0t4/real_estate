import { useState, useEffect } from 'react'
import "./AdminForm.css"
import axios from 'axios'

import TextAreaInput from "./inputs/TextAreaInput"
import TextInput from './inputs/TextInput'
import TypeInput from './inputs/TypeInput'
import IMGInput from './inputs/IMGInput'
import FilterInput from "./inputs/FilterInput"
import MoneyTypeInput from "./inputs/MoneyTypeInput"
import NumberInput from './inputs/NumberInput'

import Map from "./Components/Map"

const AdminForm = ({ BackLink }) => {

  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [sell, setSell] = useState("")
  const [rent, setRent] = useState("")

  const [infoNumbers, setInfoNumbers] = useState([
    {
      "title": "construction year",
      "value": ""
    },
    {
      "title": "floors",
      "value": ""
    },
    {
      "title": "total build area",
      "value": ""
    },
    {
      "title": "total living area",
      "value": ""
    },
    {
      "title": "bedrooms",
      "value": ""
    },
    {
      "title": "parking spaces",
      "value": ""
    },
  ])

  const [squareImg, setSquareImg] = useState([])
  const [mainIMG, setMainIMG] = useState()
  const [filterTag, setFilterTag] = useState(["All"])
  const [textInfo, setTextInfo] = useState("")
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
  const cost = [
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
  ]
  const tag = [
    '',
    ''
  ]
  const compInfo = [
    {
      title: "",
      text: ""
    },
    {
      title: "",
      text: ""
    }
  ]

  const postObj = () => {
    axios.post(BackLink, { title, subTitle, type, sell, rent, infoNumbers, squareImg, mainIMG, filterTag, compInfo, cost, tag, textInfo })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const saveForm = () => {
    console.log("seve")
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
    )
  }

  const handleChange = (value, index) => {
    setInfoNumbers(prevState => 
      prevState.map((item, ind) => 
        ind === index 
          ? { ...item, "value": value }
          : item
      ),
    );
  }
  
  useEffect(() => {
    console.log(infoNumbers);
  }, [infoNumbers]);
  
  
  const mapInfoNumbers = infoNumbers.map((i, index) => (
    <NumberInput inputDescription={i.title} key={index} setInputValue={(value) => handleChange(value, index)} />
  ))

  return (
    <div className='admin_form_colum'>
      <FilterInput inputDescription={"Select type of realEstate"} handleButtonClick={(value) => filterTagHandleButtonClick(value)} filterTag={filterTag} />
      <div> --- </div>
      <TextInput className="admin_form_title" inputDescription={"Title"} setInputValue={(value) => setTitle(value)} />
      <TextInput className="admin_form_subtitle" inputDescription={"Address"} setInputValue={(value) => setSubTitle(value)} />
      <div> --- </div>
      <TypeInput type={type} inputDescription={"Sell type"} updateBooleanValue={(value) => { typeUpdateBooleanValue(value) }} />
      {(type[1].value && type[1].value) && <div> --- </div> }
      {type[0].value && <NumberInput inputDescription={`How many cost for sell`} setInputValue={(value) => setSell(value)} />}
      {type[1].value && <NumberInput inputDescription={`How many cost for rent`} setInputValue={(value) => setRent(value)} />}
      <div> --- </div>
      {mapInfoNumbers}
      <div> --- </div>
      <IMGInput BackLink={BackLink} inputDescription={"Select main IMG"} inputMultiple changeEvent={(event) => setMainIMG(event)} />
      <IMGInput BackLink={BackLink} inputDescription={"Select square IMG"} inputMultiple changeEvent={(event) => setSquareImg(event)} />
      <Map/>
      <div> --- </div>
      <MoneyTypeInput BackLink={BackLink} inputDescription={"Cost money"} cost={cost} />
      <div> --- </div>
      <TextAreaInput inputDescription={"Description"} setInputValue={(value) => setTextInfo(value)} />
      <div>
        <button className='mainButton' onClick={saveForm}>Save</button>
      </div>
    </div>
  )
}

export default AdminForm