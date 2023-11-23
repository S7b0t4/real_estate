import { useState } from 'react'
import "./AdminForm.css"
import axios from 'axios';

import TextAreaInput from "./inputs/TextAreaInput"
import TextInput from './inputs/TextInput';
import TypeInput from './inputs/TypeInput';
import IMGInput from './inputs/IMGInput';
import FilterInput from "./inputs/FilterInput"
import MoneyTypeInput from "./inputs/MoneyTypeInput"

const AdminForm = ({BackLink}) => {

	const [form, setForm] = useState({
		title: "",
    subTitle: "",
    type: [
      {
        name: "Sell",
        value:false
      },
      {
        name: "Rent",
        value:false
      },
    ],
    sell: "",
    rent: "",
    squareImg: [],
    mainIMG: [],
		iconMapIMG: [],
    filterTag: ["All"],
    cost: [
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
    ],
    infoNumber:[
      {
        text:"",
        Num: "",
      },
    ],
    tag: [
      '',
      ''
    ], 
    textInfo:[
      ""
    ],
    linkInfo: "#",
		compInfo: [
      {
        title: "",
        text: ""
      },
      {
        title: "",
        text: ""
      } 
    ],
  }
	)
	const postObj = () => {
		const { title, subTitle, type, sell, rent, link, img, squareImg, mainIMG, filterTag, compInfo, cost, infoNumber, iconMapIMG, tag, textInfo, linkInfo,} = form
		axios.post(BackLink, {title, subTitle, type, sell, rent, link, img, squareImg, mainIMG, filterTag, compInfo, cost, infoNumber, iconMapIMG, tag, textInfo, linkInfo})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	const postPhoto = (file) => {
    const data = new FormData();
    data.append('file', file);
    axios.post(`${BackLink}post-photo`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

	const saveForm = () => {
		console.log("seve")
		postObj()
	}

	const setValueForm = (value, name) => {
		console.log(form)
		form[name] = value
	}

  const changeFile = (event, Name) => {
		const files = event
		const arr = []
		for(let i = 0; i< files.length; i++){
			arr.push( `${BackLink}uploads/`+files[i].name)
			postPhoto(files[i])
		}
		setValueForm(arr, Name)
  }

  const handleButtonClick = (value) => {
    const newArray = [...form.filterTag];
    const index = newArray.indexOf(value);
    if (index !== -1) {
      newArray.splice(index, 1);
    } else {
      newArray.push(value);
    }
    setForm({
      ...form,
      filterTag: newArray
    });
  };

	return ( 
		<div className='admin_form_colum'>
      <FilterInput inputDescription={"Select type of realEstate"} handleButtonClick={(value)=>handleButtonClick(value)} form={form}/>
			<TextInput className="admin_form_title" inputDescription={"Title"} setInputValue={(value)=>setValueForm(value, "title")}/>
			<TextInput className="admin_form_subtitle" inputDescription={"Address"} setInputValue={(value)=>setValueForm(value, "subTitle")}/>
      <TypeInput type={form.type} inputDescription={"Sell type"} setInputValue={(value)=>setValueForm(value, "type")}/>
			{<TextInput inputDescription={"How many cost for sell"} setInputValue={(value)=>setValueForm(value, "sell")}/>}
			{<TextInput inputDescription={"How many cost for rent"} setInputValue={(value)=>setValueForm(value, "rent")}/>}
			<IMGInput BackLink={BackLink} inputDescription={"Select main IMG"} inputMultiple changeEvent={(event)=>changeFile(event, "mainIMG")} />
			<IMGInput BackLink={BackLink} inputDescription={"Select square IMG"} inputMultiple changeEvent={(event)=>changeFile(event, "squareImg")} />
			<IMGInput BackLink={BackLink} inputDescription={"Select map IMG"} inputMultiple={false} changeEvent={(event)=>changeFile(event, "iconMapIMG")} />
			<MoneyTypeInput BackLink={BackLink} inputDescription={"Cost money"} form={form} />
      <TextAreaInput inputDescription={"Description"} setInputValue={(value)=>setValueForm(value, "textInfo")}/>
			<div>
        <button className='mainButton' onClick={saveForm}>Save</button>
      </div>
		</div>
	);
}
 
export default AdminForm;