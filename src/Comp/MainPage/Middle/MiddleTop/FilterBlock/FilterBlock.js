import React, { useState } from 'react'

import './FilterBlock.css'

import axios from 'axios'

import CrossSVG from './Comp/CrossSVG'

import SortElement from './Comp/FIlterSortElement/SortElement/SortElement'
import SortElementValue from './Comp/FIlterSortElement/SortElementValue/SortElementValue'
import SortElementCheckbox from './Comp/FIlterSortElement/SortElementCheckbox/SortElementCheckbox'
import SortElementCount from './Comp/FIlterSortElement/SortElementCount/SortElementCount'

const FilterBlock = ({ setTestArrForMapProductBlocks, BackLink, ChangeViewParam }) => {
  const [sortBy, setSortBy] = useState("All")
  const [country, setCountry] = useState()
  const [city, setCity] = useState()
  const [priceRange, setPriceRange] = useState({"$gte": "","$lte": "",})
  const [idontcare, setidontcare] = useState(false)
  const [yearOfConstruction, setYearOfConstruction] = useState()
  const [readymove, setReadymove] = useState(false)
  const [beingbuild, setbeingbuild] = useState(false)
  const [squares, setSquares] = useState()
  const [bedRoomCount, setBedRoomCount] = useState()

  const getInfo = () => {
    axios.post(BackLink + "get-filter", {
      sortBy,
      country,
      city,
      priceRange,
      idontcare,
      yearOfConstruction,
      readymove,
      beingbuild,
      squares,
      bedRoomCount
    })
      .then(function (response) {
        setTestArrForMapProductBlocks(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='filter_modal' onClick={(e) => e.stopPropagation()}>
      <div className='filter_block'>
        <div className='filter_block_row' >
          <div className='filter_block_row_title'>
            FILTER
          </div>
          <button className='filter_block_row_button' onClick={ChangeViewParam} alt="cross" d>
            <CrossSVG />
          </button>
        </div>
        <div className='filter_block_colum' >
          <SortElement title={"Sort by"} list={["All", "Buy", "Rent"]} setValue={(e) => setSortBy(e)} />
          <SortElement title={"Choose country"} list={["All", "Thailand", "UAE"]} setValue={(e) => setCountry(e)} />
          <SortElement title={"Choose city"} list={["All", "Bangkok", "Dubai", "Pattaya", "Samui"]} setValue={(e) => setCity(e)} />
          <SortElementValue title={"Price range (BTC)"} minTag={"0,99"} maxTag={"999999"} filter={priceRange} setFilter={(i) => setPriceRange(i)} />
          <SortElementCheckbox title='I don’t care' onChangeValue={()=> setidontcare(!idontcare)}/>
          <SortElementValue title={"Year of construction"} minTag="Since" maxTag="Till" filter={yearOfConstruction} setFilter={(i) => setYearOfConstruction(i)} />
          <SortElementCheckbox title="Ready to move in" onChangeValue={()=> setReadymove(!readymove)}/>
          <SortElementCheckbox title="Still being built" onChangeValue={()=> setbeingbuild(!beingbuild)}/>
          <SortElementValue title={"Square (m )"} minTag="Min" maxTag="Max" filter={squares} setFilter={(i) => setSquares(i)} />
          <SortElementCount title={"Bedrooms"} setBedRoomCount={(e) => setBedRoomCount(e)} />
        </div>
        <div className='filter_button_row'>
          <button className='filter_button' onClick={getInfo}>Confirm</button>
        </div>
      </div>
    </div>
  )
}
export default FilterBlock