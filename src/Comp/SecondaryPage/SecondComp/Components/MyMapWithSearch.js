import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer} from 'react-leaflet'

const MyMapWithSearch = ({ BackLink, center, mapRef }) => {
	return (
		<div className='colum'>
			<div className='map'>
				<MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }} ref={mapRef}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					/>
				</MapContainer>
			</div>
		</div>
	)
}

export default MyMapWithSearch
