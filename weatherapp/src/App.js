import React ,{useState} from 'react';
import './App.css';
import TitleComp from './components/titleComp';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY="8293e3074447f324975524c1cbe8b45a";

function App() {
const [state, setState] = useState({
  temperature:undefined,
  humidity:undefined,
  city:undefined,
  country:undefined,
  description:undefined,
  error:undefined
})

const getWeather=async(e)=>{
    e.preventDefault()
    const city=e.target.city.value
    const country=e.target.country.value
      const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data=await api_call.json()
      if(city && country){
        setState({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:""
      })
    }
    else{
      setState({
        temperature:undefined,
        humidity:undefined,
        city:undefined,
        country:undefined,
        description:undefined,
        error:"Please fill in the value"
    }
  )}}
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main">
          <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <TitleComp/>
                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather={getWeather}/>
                <Weather details={state}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
