import { useState } from 'react'
import "./AdminForm.css"
import axios from 'axios'

import TextAreaInput from "./inputs/TextAreaInput"
import TextInput from './inputs/TextInput'
import TypeInput from './inputs/TypeInput'
import IMGInput from './inputs/IMGInput'
import FilterInput from "./inputs/FilterInput"
import MoneyTypeInput from "./inputs/MoneyTypeInput"
import NumberInput from './inputs/NumberInput'
import SpecialInfo from "./inputs/SpecialInfo"

import LocationInput from './inputs/LocationInput'
import Map from "./Components/Map"

const AdminForm = ({ BackLink }) => {

  const [title, setTitle] = useState("")
  const [sell, setSell] = useState("")
  const [rent, setRent] = useState("")

  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")

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

  const [yearOfConstruction, setYearOfConstruction] = useState("")
  const [squares, setSquares] = useState("")
  const [bedrooms, setBedrooms] = useState("")

  const [specialInfo, setSpecialInfo]= useState([
    {
      title: "readytomove",
      value: false
    },
    {
      title: "construction",
      value: false
    }
  ])

  const [squareImg, setSquareImg] = useState([])
  const [filterTag, setFilterTag] = useState(["All"])
  const [textInfo, setTextInfo] = useState("")

  //Contact info
  const [number, setNumber] = useState()
  const [mail, setMail] = useState("")

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
    axios.post(BackLink, { title, type, sell, squares, yearOfConstruction, bedrooms, specialInfo, number, mail, rent, country, city, infoNumbers, squareImg, filterTag, compInfo, cost, tag, textInfo })
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

  const handleChangeInfoNumber = (value, index) => {
    setInfoNumbers(prevState =>
      prevState.map((item, ind) =>
        ind === index
          ? { ...item, "value": value }
          : item
      ),
    );
  }

  const handleChangeMoneyType = (index) => {
    setCost(prevState =>
      prevState.map((item, ind) =>
        ind === index
          ? { ...item, "value": !item.value }
          : item
      ),
    );
  }
  const handleChangeSpecialInfo = (index) => {
    setSpecialInfo(prevState =>
      prevState.map((item, ind) =>
        ind === index
          ? { ...item, "value": !item.value }
          : item
      ),
    );
  }


  const mapInfoNumbers = infoNumbers.map((i, index) => (
    <NumberInput inputDescription={i.title} key={index} index={index} setInputValue={(value) => handleChangeInfoNumber(value, index)} setSquares={(v) => { setSquares(v) }} setYearOfConstruction={(v) => { setYearOfConstruction(v) }} setBedrooms={(v)=>{setBedrooms(v)}} />
  ))

return (
  <div className='admin_form_colum'>
    <FilterInput inputDescription={"Select type of realEstate"} handleButtonClick={(value) => filterTagHandleButtonClick(value)} filterTag={filterTag} />
    <div> --- </div>
    <TextInput className="admin_form_title" inputDescription={"Title"} setInputValue={(value) => setTitle(value)} type={"text"} />
    <div> --- </div>
    <h3>Contact info</h3>
    <TextInput inputDescription={"number"} setInputValue={(value) => setNumber(value)} type={"tel"} />
    <TextInput inputDescription={"mail"} setInputValue={(value) => setMail(value)} type={"email"} />
    <div> --- </div>
    <TypeInput type={type} inputDescription={"Sell type"} updateBooleanValue={(value) => { typeUpdateBooleanValue(value) }} />
    {(type[1].value && type[1].value) && <div> --- </div>}
    {type[0].value && <NumberInput inputDescription={`How many cost for sell`} setInputValue={(value) => setSell(value)} />}
    {type[1].value && <NumberInput inputDescription={`How many cost for rent`} setInputValue={(value) => setRent(value)} />}
    <div> --- </div>
    {mapInfoNumbers}
    <SpecialInfo inputDescription={`SpecialInfo`} specialInfo={specialInfo} handleChangeSpecialInfo={(i)=>handleChangeSpecialInfo(i)}/>
    <div> --- </div>
    <IMGInput BackLink={BackLink} inputDescription={"Select square IMG"} inputMultiple changeEvent={(event) => setSquareImg(event)} />
    <LocationInput inputDescription={"Select country"} list={["Thailand", "UAE"]} setValue={(i) => setCountry(i)} />
    <LocationInput inputDescription={"Select city"} list={["Bangkok", "Dubai", "Pattaya", "Samui"]} setValue={(i) => setCity(i)} />
    <Map city={city} country={country} />
    <div> --- </div>
    <MoneyTypeInput BackLink={BackLink} inputDescription={"Cost money"} cost={cost} handleChangeMoneyType={(index) => handleChangeMoneyType(index)} />
    <div> --- </div>
    <TextAreaInput inputDescription={"Description"} setInputValue={(value) => setTextInfo(value) || console.log(textInfo)} />
    <div>
      <button className='mainButton' onClick={saveForm}>Save</button>
    </div>
  </div>
)
}

export default AdminForm