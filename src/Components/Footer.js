import React from 'react'

export default function Footer(props) {
  return (
    <div className='footerpart'>
      <div className='footer'>
        <div>Today weather conditions</div>
        <div className='time_date'>
            <h1>{props.date}</h1>
        </div>
        <div className='todayTEMP'>
            <div>
                <div className='ddd'>Max Temp</div>
                <h1>{Math.floor(props.maxTe)}°</h1>
            </div>
            <div>
                <div className='ddd'>Temp</div>
                <h1 className='temprature'>{Math.floor(props.toTemp)}°</h1>
            </div>
            <div>
                <div className='ddd'>Min Temp</div>
                <h1>{props.minTe}°</h1>
            </div>
        </div>
        <div className='rainChance'>
            <h2>Rain Chance {props.rainchan}%</h2>
        </div>
        <div className='copyRight'>
            <p>© All rights reserved</p>
            <p>created by sagar thakur</p>
        </div>
      </div>
    </div>
  )
}
