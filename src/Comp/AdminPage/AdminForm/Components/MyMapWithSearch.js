import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const MyMapWithSearch = ({ center, mapRef }) => {

	const customIcon = new L.Icon({
		iconUrl: 'путь_к_новому_изображению.png',
		iconSize: [32, 32],
		iconAnchor: [16, 32],
		popupAnchor: [0, -32],
	})

	return (
		<div className='colum'>
			<div className='map'>
				<MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }} ref={mapRef}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					/>

					<Marker position={center} icon={customIcon}>
						<Popup>
							Пример маркера с Leaflet в React.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	)
}

export default MyMapWithSearch
