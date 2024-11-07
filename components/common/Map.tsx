'use client'

import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  {
    ssr: false
  }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  {
    ssr: false
  }
)

function MyComponent() {
  const map = useMapEvents({
    click: () => {
      map.locate()
    },
    locationfound: (location: any) => {
      map.setView(location?.target?._animateToCenter, map.getZoom())
      console.log('location found:', location)
    }
  })
  return null
}

const Map = ({ latitude, longitude }: any) => {
  const position = [11.004556, 76.961632]
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <MyComponent />
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position}>
        <Popup>
          lat. {latitude} <br />
          long. {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
