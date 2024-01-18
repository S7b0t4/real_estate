import { useRef, useState } from 'react'

import MyMapWithSearch from "./MyMapWithSearch"
import SearchInput from './SearchInput'

const Map = () => {

	const OpenCageAPIKey = 'a6276db2e65d48b191e2085d7495ad52';

	const [center, setCenter] = useState([54.7261409, 55.947499])
	const [searchResult, setSearchResult] = useState()
	const mapRef = useRef(null)
	const [inputValue, setInputValue] = useState()

	const handleSearch = async () => {
		try {
			const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=${OpenCageAPIKey}`)
			const data = await response.json()
			if (data.results && data.results.length > 0) {
				const result = data.results[0].geometry
				setSearchResult(result)
				setCenter([result.lat, result.lng])
				console.log(searchResult)
				if (mapRef.current) {
					const map = mapRef.current
					map.setView([result.lat, result.lng], 13)
				}
			} else {
				setSearchResult(null)
			}
		} catch (error) {
			console.log('Error fetching geocoding data:', error)
		}
	}

	return (
		<div>
			<SearchInput onSearch={() => {handleSearch()}} onChange={(i) => {setInputValue(i)}} />
			<MyMapWithSearch center={center} mapRef={mapRef}/>
		</div>
	)
}
export default Map