import React from 'react';

const SpecialInfo = ({inputDescription, specialInfo, handleChangeSpecialInfo}) => {

  const mapSpecialInfo = specialInfo.map((i, index) => (
    <div className='row' key={index}>
      <div>{i.title}</div>
      <input type="checkbox" onClick={() => handleChangeSpecialInfo(index)}/>
    </div>
  ))
  return (
    <div>
      <div>{inputDescription}</div>
      <div>{mapSpecialInfo}</div>
    </div>
  );
}

export default SpecialInfo;