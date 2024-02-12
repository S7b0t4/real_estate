import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RequestInfo = ({ itemInfo, BackLink }) => {
  const [vive, setVive] = useState(true)

  const [copyNumber, setCopyNumber] = useState("second_main_top_row_row")
  const [copyMail, setCopyMail] = useState("second_main_top_row_row")

  const changeValue = (fun, def, value) => {
    fun(def + " " + value)
    setTimeout(() => {
      fun("second_main_top_row_row")
    }, 500)
  }

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
        <div className='second_main_top_line'>
          <div className='second_main_top_row'>
            <CopyToClipboard text={itemInfo.number}>
              <div className={copyNumber} onClick={()=>changeValue(setCopyNumber, copyNumber, "copy")}>
                <div>
                  <img className='little_img' src={BackLink + "uploads/telephone.svg"} alt="" />
                </div>
                <div>
                  {itemInfo.number}
                </div>
              </div>
            </CopyToClipboard>
            <CopyToClipboard text={itemInfo.mail}>
              <div className={copyMail} onClick={()=>changeValue(setCopyMail, copyMail, "copy")}>
                <div>
                  <img className='little_img' src={BackLink + "uploads/mail.svg"} alt="" />
                </div>
                <div>
                  {itemInfo.mail}
                </div>
              </div>
            </CopyToClipboard>
          </div>
          <div onClick={changeVive} className='button'>
              <img className='little_img' src={BackLink + "uploads/cross.svg"} alt="" />
            </div>
        </div>}
    </div>
  );
}

export default RequestInfo;