import { useRef, useState } from 'react'

const IMGInput = ({BackLink, inputDescription, changeEvent, inputMultiple}) => {

	const [imgList, setImgList] = useState([])

	const imgSaveButton = useRef()

	const imgHandlePick = () => {
    imgSaveButton.current.click()
  }

	const imgListMap = imgList.map((i)=>(
		<div>
			<img src={BackLink + "uploads/" + i.name} alt="" />
		</div>	
	))

	const saveImg = (event) =>{
		setImgList(Object.values(event.target.files));
		changeEvent(event.target.files)
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