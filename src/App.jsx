import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg1 flex justify-center'>
        <div className="card bg1 rounded-3xl text-center px-10 py-3 numor ">
          <div className="search w-full flex justify-between items-center">
            <input className='bg-transparent  rounded-3xl text-white border-0 outline-none border-none m-2 py-3 px-6' type="text" placeholder='enter city' />
            <button className='numor2 border-none outline-none h-9 w-9 m-auto rounded-3xl  '><svg className='h-9 w-9 text-transparent bg1 rounded-3xl' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M14.4 14.4L16 16M15.2 11.6C15.2 9.61175 13.5882 8 11.6 8C9.61175 8 8 9.61175 8 11.6C8 13.5882 9.61175 15.2 11.6 15.2C13.5882 15.2 15.2 13.5882 15.2 11.6Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>
          </div>
          <div className='m-1 '>
            <img className='mt-6 dropShadow h-32 w-32 mx-auto ' src="src/assets/clear-day.svg" alt="" />
            <h2 className="city text-white text-5xl textshadow">New York</h2>
            <h1 className="temp text-white m-3 text-4xl textshadow">22°c</h1>
            <h1 className="condition text-white m-3 text-4xl textshadow">Clear</h1>
          </div>
          <div className="details flex justify-between items-center">
            <div className='flex justify-center items-center'>
              <img className='h-14 w-14 mx-1 my-2' src="src/assets/thermometer.svg" alt="" />
            </div>
            <div>
              <p class="humidity text-white text-lg textshadow">50%</p>
              <p className='text-white text-xl textshadow'>Humidity</p>
            </div>
            <div className='flex justify-center items-center'>
              <img className='h-14 w-14 mx-1 my-2' src="src/assets/windsock.svg" alt="" />
            </div>
            <div>
              <p class="wind-speed text-white text-lg textshadow">15 km/h</p>
              <p className='text-white text-xl textshadow'>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
