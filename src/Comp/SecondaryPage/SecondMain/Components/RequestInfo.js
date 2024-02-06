import React, { useState } from 'react';

const RequestInfo = ({ itemInfo, BackLink }) => {
  const [vive, setVive] = useState(true)

  const changeVive = () => {
    setVive(!vive)
  }
  return (
    <div>
      {vive &&
        <div className='second_main_top_big_row_button_row_button' onClick={changeVive}>
          Request Info
        </div>}
      {!vive &&
        <div className='second_main_top_row'>
          <div className='second_main_top_row_row'>
            <div>
              <img className='little_img' src={BackLink + "uploads/telephone.svg"} alt="" />
            </div>
            <div>
              {itemInfo.number}
            </div>
          </div>
          <div className='second_main_top_row_row'>
            <div>
              <img className='little_img' src={BackLink + "uploads/mail.svg"} alt="" />
            </div>
            <div>
              {itemInfo.mail}
            </div>
          </div>
          <div onClick={changeVive} className='button'>
            <img className='little_img' src={BackLink + "uploads/cross.svg"} alt="" />
          </div>
        </div>}
    </div>
  );
}

export default RequestInfo;