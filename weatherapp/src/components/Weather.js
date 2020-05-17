import React from 'react'

function Weather(props) {
    const city=props.details.city
    const country=props.details.country
    const temperature=props.details.temperature
    const humidity=props.details.humidity
    const description=props.details.description
    const error=props.details.error
    return (
        <div className="weather__info">
            { {city} && {country} && <p className="weather__key">Location:<span className="weather__value"> {city} {country}</span></p>}
            { {temperature} && <p className="weather__key">Temperature:<span className="weather__value"> {temperature}</span></p> }
            { {humidity} && <p className="weather__key">Humidity:<span className="weather__value"> {humidity}</span></p>}
            {   {description} && <p className="weather__key">Description:<span className="weather__value"> {description}</span></p>}
            {  {error} && <p className="weather__key">Error:<span className="weather__value"> {error}</span></p> }
        </div>
    )
}

export default Weather
