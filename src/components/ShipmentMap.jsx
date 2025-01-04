import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '75%'
};

const mapStyle = {
  height: '100%',
  width: '100%'
};

const createCustomIcon = (imagePath) => {
  return new L.Icon({
    iconUrl: imagePath,
    iconSize: [25, 27], // Size of the icon
    iconAnchor: [12, 27], // Point of the icon which will correspond to marker's location
    // popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    // shadowSize: [25, 27] // Size of the shadow
  });
};

const ForceMapUpdate = () => { 
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
};

const ShipmentMap = () => {
  const points = [
    { 
      id: 1, 
      position: [46.8, -100.8], 
      icon: 'assets/pickup-icon.png' 
    },
    { 
      id: 2, 
      position: [41.5, -99.5], 
      icon: 'assets/drop-icon.png'
    },
    { 
      id: 3, 
      position: [35.5, -105.5], 
      icon: 'assets/drop-icon.png' 
    },
  ];

  const averagePosition = points.reduce(
    (acc, point) => {
      acc.lat += point.position[0];
      acc.lng += point.position[1];
      return acc;
    },
    { lat: 0, lng: 0 }
  );
  
  const center = [
    averagePosition.lat / points.length,
    averagePosition.lng / points.length,
  ];

  
  const lineCoordinates = points.map(point => point.position);

  return (
    <div style={mapContainerStyle}>
      <MapContainer
        center={center}
        zoom={4}
        style={mapStyle}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <ForceMapUpdate />
        <Polyline
          positions={lineCoordinates}
          pathOptions={{
            color: '#007AFF',
            weight: 3,
            opacity: 0.7
          }}
        />
        
        {points.map((point) => (
          <Marker
            key={point.id}
            position={point.position}
            icon={createCustomIcon(point.icon)}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default ShipmentMap;
