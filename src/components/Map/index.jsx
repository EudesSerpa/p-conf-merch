import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './styles.css';

const DEFAULT_CENTER = [38.9072, -77.0369];
const DEFAULT_ZOOM = 13;

export const Map = ({ location }) => {
  const position = { lat: location.lat, lng: location.lng };

  return (
    <>
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Order location</Popup>
        </Marker>
        <ChangeMapView coords={position} />
      </MapContainer>
    </>
  );
};

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
};
