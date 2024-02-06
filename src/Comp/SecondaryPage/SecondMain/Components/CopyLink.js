import iconShare from "../../../imgSource/iconShare.svg"
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'animate.css';

const CopyLink = () => {
  const [green, setGreen] = useState("")
  const handleClick = () => {
    setGreen("copy animate__pulse")
    setTimeout(() => {
      setGreen("")
    }, 500)
  };

  return (
    <CopyToClipboard text={window.location.href}>
      <div className={"copyLink " + green} onClick={handleClick}>
        <div>
          <img src={iconShare} alt="" />
        </div>
			  <div className='second_main_top_big_row_share_row_link' >Copy link</div>
      </div>
    </CopyToClipboard>
  );
};

export default CopyLink;
