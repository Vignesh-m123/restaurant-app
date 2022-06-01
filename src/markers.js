import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const MapContainer = () => {
  
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat:   28.6600,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 77.2300
      },
    }
    // {
    //   name: "Location 4",
    //   location: { 
    //     lat: 41.3797,
    //     lng: 2.1682
    //   },
    // },
    // {
    //   name: "Location 5",
    //   location: { 
    //     lat: 41.4055,
    //     lng: 2.1915
    //   },
    // }
  ];
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
    // 11.1271° N, 78.6569° E
  const defaultCenter = {
    lat: 11.1271, lng: 78.6569
  }
  
//   28.6600	77.2300
// 18.9667	72.8333
// 22.5411	88.3378
// 12.9699	77.5980
// 13.0825	80.2750
// 17.3667	78.4667
// 18.5196	73.8553
// 23.0300	72.5800
// 21.1700	72.8300
// 26.8470	80.9470
// 26.9167	75.8667
// 26.4725	80.3311
// 25.1500	82.5800
// 21.1539	79.0831
// 28.6667	77.4167

// AIzaSyDj9EqaqYYH6O5IjmFs6ZVdW61-wwXUS2k - key
  return (
      <div>
     <LoadScript
     googleMapsApiKey='AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          >
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap>
     </LoadScript>
     </div>
  )
}
