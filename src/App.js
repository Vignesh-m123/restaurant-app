import axios from 'axios';
import { response } from 'express';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import { usePosition } from './position';

function App() {
  const {
    latitude,
    longitude,
    error,
  } = usePosition();
  console.log(latitude,longitude,error);
  let items
  //  useEffect(() => {
    
    // key1 =AIzaSyAK08OEC-B2kSyWfSdeCzdIkVnT44bcBwM 
    // key2 =AIzaSyDj9EqaqYYH6O5IjmFs6ZVdW61-wwXUS2k
    // key3-AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk
//    if ("geolocation" in navigator) {
//      console.log("Available");
//    } else {
//      console.log("Not Available");
//    }
//  }, []);
 
//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude is :", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);
//   });
// reactQuery

useEffect(() => {
   items = axios.get('http://localhost:5000/getPast')
  //  .then(response => {return response.data})
  //  console.log("items",items)

  
}, [])

let config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=200&type=restaurant&key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk`,
  // headers: {"Access-Control-Allow-Origin": "*"}
};
let formData = new FormData();
formData.append(latitude,latitude);
formData.append(longitude,longitude)
// console.log(latitude);
// const options = {
//   method: 'GET',
//   url: 'https://nearby-places.p.rapidapi.com/nearby',
//   params: {lat: latitude, lng: longitude, type: 'restaurant', radius: '200'},
//   headers: {
//     'X-RapidAPI-Host': 'nearby-places.p.rapidapi.com',
//     'X-RapidAPI-Key': '4529d31597msh63df5df937856a7p1a4c25jsn1085b88c425b'
//   }
// };

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
    }}]

  useEffect(() => {
  if(latitude){
    axios(config)
    .then(function (response) {
      console.log("from nearby",JSON.stringify(response.data));
      // axios.post('http://localhost:5000/postLocation',response.data)
    })
    .catch(function (error) {
      console.log("nearby error",error);
    });}

}, [latitude]);
 
const Cclick = (e) =>{
   e.preventDefault();
      axios.post('http://localhost:5000/postLocation',[latitude,longitude])
      .then(response => console.log(response))
    
 }

  return (
    <div className='container'>
      <div className='col-sm-4'> {`        `}  </div>
    <div className="col text-center">
      <Button type='button' onClick={(e) =>Cclick(e)}>Start</Button>
      {/* <select>// select from database */}
      {/* {items.map(item => (
        <option
          // key={item.value}
          // value={item.value}
        >
          {`${item.latitude}${item.longitude}`}
        </option>
      ))}
    </select> */}
    
      {error ?alert(error): ""}
    </div>
    </div>
  );
}

export default App;



