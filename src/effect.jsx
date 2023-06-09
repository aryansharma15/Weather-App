import React, { useEffect, useState } from 'react'


function Effect() {

  const [type, setType] = useState("Zeus")
  
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("Madrid");
  const [landscape, setLandscape] = useState([]);

  function Loc() {
    fetch(
       `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID={API_KEY_FOR_WEATHER_API}&units=metric`
    )

    .then((res) => {
      if(res.ok) {
        console.log(res.status);
        return res.json();
      }
      else{
        if(res.status === 404){
          return alert("Error! Wrong Location");

        }
        alert("Error!");
        throw new Error("You have an error");
      }
    })
  }

  useEffect(() => {
    console.log("Render");
  });

  return (
    <div>

      <h1>{type}</h1>
    </div>
  )
}

export default Effect