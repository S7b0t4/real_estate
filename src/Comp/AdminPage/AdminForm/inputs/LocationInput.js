import React from 'react';
import { useState } from 'react';
import "./LocationInput.css"

function LocationInput({ list, setValue, inputDescription}) {
  const [location, setLocation] = useState(inputDescription)
  const [vive, setVive] = useState(false)

  const filterFunction = (value) => {
    return value !== location
  }

  const filterMap = list.filter(filterFunction);

  const mapArr = filterMap.map((i, index) => (
    <div className='element_value' onClick={() => {setLocation(i); setVive(!vive); setValue(i)}} key={index}>
      {i}
    </div>
  ))

  return (
    <div className='main_block'>
      <div className='select_value' onClick={() => { setVive(!vive) }}>{location}</div>
      <div className='list_value'>{vive && mapArr}</div>
    </div>
  );
}

export default LocationInput;