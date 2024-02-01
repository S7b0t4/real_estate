import { useRef, useState } from 'react'

import MyMapWithSearch from "./MyMapWithSearch"
import { useEffect } from 'react';

const Map = ({city, country}) => {

	const OpenCageAPIKey = 'a6276db2e65d48b191e2085d7495ad52';

	const [center, setCenter] = useState([54.7261409, 55.947499])
	const mapRef = useRef(null)

	useEffect(() => {
		const handleSearch = async () => {
			try {
				const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${`${city},${country}`}&key=${OpenCageAPIKey}`)
				const data = await response.json()
				if (data.results && data.results.length > 0) {
					const result = data.results[0].geometry
					setCenter([result.lat, result.lng])
					if (mapRef.current) {
						const map = mapRef.current
						map.setView([result.lat, result.lng], 13)
					}
				}
			} catch (error) {
				console.log('Error fetching geocoding data:', error)
			}
		}
		handleSearch()
	},[city, country])

	return (
		<div>
			<MyMapWithSearch center={center} mapRef={mapRef}/>
		</div>
	)
}
export default Map