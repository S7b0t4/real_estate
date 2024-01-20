import { useRef, useState } from 'react'
import axios from 'axios'

const IMGInput = ({BackLink, inputDescription, changeEvent, inputMultiple}) => {

	const [imgList, setImgList] = useState([])

	const imgSaveButton = useRef()

	const imgHandlePick = () => {
    imgSaveButton.current.click()
  }

	const imgListMap = imgList.map((i)=>(
		<div>
			<img src={BackLink + "uploads/" + i} alt="" />
		</div>	
	))

	const saveImg = (event) =>{
		setImgList(Object.values(event.target.files).map(i=>i.name));
		changeEvent(Object.values(event.target.files).map(i=>i.name))
		postPhoto(Object.values(event.target.files))
	}

	const postPhoto = (file) => {
    const data = new FormData()
    data.append('file', file)
    axios.post(`${BackLink}post-photo`, data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

	return ( 
		<div className='colum'>
			<div className='input_title'>{inputDescription}:</div>
			<div className='row center gap10'>
				{imgListMap}
				<button className='input_button' onClick={imgHandlePick}>+</button>
			</div>
			<input ref={imgSaveButton} multiple={inputMultiple} type="file" onChange={(event)=>{saveImg(event)}} className='hidden'/>
		</div>
	);
}
 
export default IMGInput;