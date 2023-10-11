import React from 'react'
import '../App.css';
export default function TempratureCard(props) {
  return (
    <div className="card">
        <div style={{backgroundImage:`url(${props.img})`}} className="top-section">
            <div className="border"></div>
            <div className="icons">
                <div className="logo">
                    {props.address}
                </div>
                <div className="social-media">   
                </div>
            </div>
        </div>
        <div className="bottom-section">
            <span className="title">{props.des}</span>
            <div className="row row1">
            <div className="item">
                <span className="big-text">humidity</span>
                <span className="regular-text">{props.humid}%</span>
            </div>
            <div className="item">
                <span className="big-text">conditions</span>
                <span className="regular-text">{props.condit}</span>
            </div>
            <div className="item">
                <span className="big-text">cloudcover</span>
                <span className="regular-text">{props.cloudCov}%</span>
            </div>
            </div>
        </div>
    </div>
  )
}
