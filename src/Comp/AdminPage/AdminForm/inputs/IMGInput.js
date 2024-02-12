import { useRef, useState } from 'react'
import axios from 'axios'

const IMGInput = ({BackLink, inputDescription, changeEvent, inputMultiple}) => {
  const [imgList, setImgList] = useState([]);
  const imgSaveButton = useRef();

  const imgHandlePick = () => {
    imgSaveButton.current.click();
  }

  const saveImg = (event) =>{
    const files = event.target.files;
    const fileNames = Object.values(files).map(i => i.name);
    setImgList(prevImgList => [...prevImgList, ...fileNames]);
    changeEvent(fileNames);
    postPhoto(files);
  }

  const postPhoto = (files) => {
    const uploadPromises = [];
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('file', files[i]);
      const uploadPromise = axios.post(`${BackLink}post-photo`, formData);
      uploadPromises.push(uploadPromise);
    }

    Promise.all(uploadPromises)
      .then(function (responses) {
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return ( 
    <div className='colum'>
      <div className='input_title'>{inputDescription}:</div>
      <div className='row center gap10'>
        {imgList.map((fileName, index) => (
          <div key={index}>
            <img className='admin_pandel_img_input_square_img' src={`${BackLink}uploads/${fileName}`} alt="" />
          </div>
        ))}
        <button className='input_button' onClick={imgHandlePick}>+</button>
      </div>
      <input ref={imgSaveButton} multiple={inputMultiple} type="file" onChange={saveImg} className='hidden'/>
    </div>
  );
}
 
export default IMGInput;
