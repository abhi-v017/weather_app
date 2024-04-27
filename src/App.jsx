import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apikey = "a74e0930153d73bd717cbdf18b8f755e";
  const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  const checkWeather = async () => {
    try {
      const response = await fetch(apiurl + city + `&appid=${apikey}`);
      const data = await response.json();
      setWeatherData(data);
      console.log(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }

  }

  const handleSearch = () => {
    checkWeather();
  };
  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return 'clear.svg';
      case 'Clouds':
        return 'cloudy.svg';
      case 'Rain':
        return 'rain.svg';
      case 'Snow':
        return 'snow.svg';
      case 'Drizzel':
        return 'drizzel.svg';
      case 'Mist':
        return 'mist.svg';
      case 'Fog':
        return 'fog.svg';
      case 'Haze':
        return 'haze.svg';
      case 'Smoke':
        return 'smoke.svg';
    };
  }
  return (
    <>
      <div className='bg1 flex justify-center items-center h-screen w-full'>
        <div className="card bg1 rounded-3xl text-center px-10 py-3 numor sm:w-auto sm:h-auto max-sm:px-6">
          <div className="search w-full flex justify-between items-center max-sm:flex-col">
            <input type="text" value={city} onChange={handleInputChange} className='bg-transparent numor3  rounded-3xl text-white border-0 outline-none border-none m-2 py-3 px-6' placeholder='enter city' />
            <button className='numor2 border-none outline-none h-9 w-9 m-auto rounded-3xl ' onClick={handleSearch}>  <lord-icon
              src="https://cdn.lordicon.com/kkvxgpti.json"
              trigger="hover"
              colors="primary:#ffffff">
            </lord-icon></button>
          </div>
          <div className='m-1 '>
            <img className='mt-6 dropShadow h-32 w-32 mx-auto ' src={`src/assets/${weatherData.weather ? getWeatherIcon(weatherData.weather[0].main) : 'begin.svg'}`} alt="" />
            <h2 className="city text-white text-5xl textshadow max-sm:text-3xl">{weatherData.name || ''}</h2>
            <h1 className="temp text-white m-3 text-4xl textshadow max-sm:text-2xl">{weatherData.main ? `${weatherData.main.temp}°c` : ''}</h1>
            <h1 className="condition text-white m-3 text-4xl textshadow max-sm:text-2xl">{weatherData.weather ? weatherData.weather[0].main : ''}</h1>
          </div>
          <div className="details flex justify-between items-center">
            <div className='sm:flex items-center'>
              <div>
                <img className='h-14 w-14 mx-1 my-2' src="src/assets/thermometer.svg" alt="" />
              </div>
              <div>
                <p className="humidity text-white text-lg textshadow max-sm:text-lg">{weatherData.main ? `${weatherData.main.humidity}%` : ''}</p>
                <p className='text-white text-xl textshadow max-sm:text-lg'>Humidity</p>
              </div>
            </div>
            <div className='sm:flex items-center'>
              <div>
                <img className='h-14 w-14 mx-1 my-2' src="src/assets/windsock.svg" alt="" />
              </div>
              <div>
                <p className="wind-speed text-white text-lg textshadow max-sm:text-lg">{weatherData.wind ? `${weatherData.wind.speed}km/h` : ''}</p>
                <p className='text-white text-xl textshadow max-sm:text-lg'>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
