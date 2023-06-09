
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Maps from "./Maps";
import "leaflet/dist/leaflet.css"

const Geographical = () => {
    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '100vh' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Geographical;