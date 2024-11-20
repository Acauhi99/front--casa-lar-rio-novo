import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ position, mapRef }) => {
  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ height: "100%", width: "100%", position: "relative" }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Nossa localização</Popup>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  mapRef: PropTypes.object,
};

export default Map;
