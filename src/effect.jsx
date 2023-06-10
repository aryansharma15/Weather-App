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

      // For error or bad response
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

      // for approved
      .then(() => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));

    fetch(
      `https://api.unsplash.com/search/photos?query=${locations}&client_id={API_KEY_FOR_UNSPLASH}`
    )
      .then((res) => {
        if(res.ok){
          return res.json;
        }
        else{
          throw new Error("You made an error");
        }
      })
      .then((data) => {
        console.log(data);
        setLandscape(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));

  }

  useEffect(() => {
    console.log("Render");
  });

  return (

    // Remake
    <div className="app">
      <div className="wrapper">
        <div className="search">
          <input
            type="text"
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            placeholder="Enter location"
            className="location_input"
          />
          <button className="location_searcher" onClick={ifClicked}>
            Search Location
          </button>
        </div>
        <div className="app__data">
          <p className="temp">Current Temparature: {weather?.main?.temp}</p>
        </div>
        <img className="app__image" src={photos} alt="" />
      </div>
    </div>
  )
}

export default Effect