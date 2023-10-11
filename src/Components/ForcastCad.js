import React from 'react'
import "../App.css"

export default function ForcastCad(props) {
  return (
    <div className="cardContainer">
        <div className="focastCard">
        <p className="city">{props.dateTime}</p>
        <p className="weather">{props.condti}</p>
        <p className='RanCh' style={{color:"white",margin:'7px'}}>Rain chance {props.rainChance}%</p>
        <p className="temp">{props.temp}°</p>
        <div className="minmaxContainer">
            <div className="min">
                <p className="minHeading">Min</p>
                <p className="minTemp">{props.temMin}°</p>
            </div>
            <div className="max"><p className="maxHeading">Max</p>
                <p className="maxTemp">{props.temMax}°</p></div>
            </div>
        </div>
    </div>
  )
}
