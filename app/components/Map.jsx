"use client"
import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

// import {
//     MapContainer,
//     TileLayer,
//     useMap,
//     Marker, Popup
//   } from 'https://cdn.esm.sh/react-leaflet'
const Map = () => {
    const position = [51.505, -0.09]
    return (
        <div>
            <img src="https://i.stack.imgur.com/TfOEh.jpg" alt="" className='w-64'/>
          {/* <MapContainer center={position} zoom={13} scrollWheelZoom={true} className='h-5'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>   */}
        </div>

    );
};

export default Map;