import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    axios.get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  return (
    
    <div className="col-md-12">
    <div className="weatherBg">
      <h1 className="heading">Weather App</h1>
  
      <div className="d-grid gap-3 col-4 mt-4">
        <input
          type="text"
          className="form-control"
          value={inputCity}
          onChange={handleChangeInput} /> <button className="btn btn-primary" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  
    {Object.keys(data).length > 0 && (
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox" style={{ backgroundColor: "blueviolet" }}>
          <img
            className="weatherIcon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            alt="weather icon"
          />
          <h5 className="weatherCity"> City: {data?.name}</h5>
  
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h6 className="weatherTemp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer-low" viewBox="0 0 16 16">
                    <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415"/>
                    <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
                  </svg> Temp
                </h6>
                <p>{((data?.main?.temp_max) - 273.15).toFixed(2)}°C</p>
              </div>
              <div className="col-md-6">
                <h6 className="weatherTemp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                  </svg> Speed
                </h6>
                <p>{data?.wind.speed} m/s</p>
              </div>
            </div>
  
            <div className="row">
              <div className="col-md-6">
                <h6 className="weatherTemp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud" viewBox="0 0 16 16">
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                  </svg> Clouds
                </h6>
                <p>{data.weather.length > 0 ? data.weather[0].description : ''}</p>
              </div>
              <div className="col-md-6">
                <h6 className="weatherTemp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M7.5 1a6.5 6.5 0 0 1 6.473 7.5c.8.4 1.027 1.2.627 2-.4.8-1.2 1.027-2-.627-1.666-.833-2.6-2.56-2.18-4.128l.55-.55a.75.75 0 0 1 1.06 1.06l-.55.55C10.28 9.91 11.205 11 12.5 11c1.933 0 3.5-1.567 3.5-3.5S14.433 4 12.5 4a3.49 3.49 0 0 0-2.622 1.17.75.75 0 1 1-1.123-.995A4.99 4.99 0 0 1 12.5 3c2.757 0 5 2.243 5 5s-2.243 5-5 5a4.987 4.987 0 0 1-3.95-1.975.75.75 0 0 1 1.2-.9A3.491 3.491 0 0 0 7.5 13c1.933 0 3.5-1.567 3.5-3.5S9.433 6 7.5 6c-.93 0-1.778.4-2.375 1.062a.75.75 0 0 1-1.25-.844A5.49 5.49 0 0 1 7.5 7.5z"/>
                  </svg> Timezone
                </h6>
                <p>{data?.timezone}</p>
              </div>
              
            </div>
  
          </div>
        </div>
      </div>
    )}
  
  </div>
)};

export default App;
