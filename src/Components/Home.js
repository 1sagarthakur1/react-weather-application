import React,{useState,useEffect} from 'react'
import TempratureCard from './TempratureCard'

import '../App.css'
import ForcastCad from './ForcastCad'

import cloud0 from '../Images/cloud0.gif';
import cloud10_20 from '../Images/cloud10_20.gif';
import cloud20_30 from '../Images/cloud20_30.gif';
import cloud30_40 from '../Images/cloud30_40.gif';
import cloud50_60 from '../Images/cloud50_60.gif';
import cloud70_80 from '../Images/cloud70_80.gif';
import cloud80_90 from '../Images/cloud80_90.gif';
import cloud90_95 from '../Images/cloud90_95.gif';
import cloud95_100 from '../Images/clound95-100.gif';
import Rain50_60 from '../Images/rain50_60.gif';
import Rain60_70 from '../Images/Rain60_70.gif';
import Rain70_80 from '../Images/Rain70_80.gif';
import Rain80_90 from '../Images/rain80_90.gif';
import Rain90_95 from '../Images/Rain90_95.gif';
import Rain95_100 from '../Images/Rain95_100.gif';
import sunset from '../Images/Sunset0-10.gif';
import Footer from './Footer';


export default function Home() {
    
    const [daydata, setDayData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [address,setAdd] = useState();
    const [rain,setRain] = useState();
    const [resAddr,setresAddr] = useState();
    const [currTemp,setcurrTemp] = useState();
    const [description,setdescription] = useState();
    const [humidity,sethumidity] = useState();
    const [conditions,setconditions] = useState();
    const [cloudcover,setcloudcover] = useState();
    const [weatherImage,setweatherImage] = useState();
    const [city,setCity] = useState("charphari");

    const [todaydata,setTodayData] = useState({});

    useEffect(()=>{
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=YMSJSBLCWRYZMV28XJUDA94BJ&contentType=json
        `;
        // const url = "";
        fetch(url)
          .then((response) => response.json())
          .then((data) =>{
            setDayData(data.days);
            setAdd(data.address);
            setRain(data.currentConditions.precipprob)
            setresAddr(data.resolvedAddress);
            setcurrTemp(data.currentConditions.temp);
            setdescription(data.description);
            sethumidity(data.currentConditions.humidity);
            setconditions(data.currentConditions.conditions);
            setcloudcover(data.currentConditions.cloudcover);
            imageSetaccding(data.currentConditions.cloudcover,data.currentConditions.precipprob)

            setTodayData(data.days[0])
            setLoading(false)
          })
          .catch((error) =>{
            console.error('Error fetching data:', error);
            setLoading(false);
          });
    },[city])

    function imageSetaccding(Cloudata,RainData){
        if(Cloudata===0 && RainData===0){
            setweatherImage(cloud0)
        }
        else if(Cloudata>0 && Cloudata<=10 && RainData<=50){
            setweatherImage(cloud10_20)
        }
        else if(Cloudata>10 && Cloudata<=20 && RainData<=50){
            setweatherImage(cloud10_20)
        }
        else if(Cloudata>20 && Cloudata<=30 && RainData<=50){
            setweatherImage(cloud20_30)
        }
        else if(Cloudata>30 && Cloudata<=40 && RainData<=50){
            setweatherImage(cloud30_40)
        }
        else if(Cloudata>40 && Cloudata<=50 && RainData<=50){
            setweatherImage(cloud30_40)
        }
        else if(Cloudata>50 && Cloudata<=60 && RainData<=50){
            setweatherImage(cloud50_60)
        }
        else if(Cloudata>60 && Cloudata<=70 && RainData<=50){
            setweatherImage(cloud50_60)
        }
        else if(Cloudata>70 && Cloudata<=80 && RainData<=50){
            setweatherImage(cloud70_80)
        }
        else if(Cloudata>80 && Cloudata<=90 && RainData<=50){
            setweatherImage(cloud80_90)
        }
        else if(Cloudata>90 && Cloudata<=95 && RainData<=50){
            setweatherImage(cloud90_95)
        }
        else if(Cloudata>95 && Cloudata<=100 && RainData<=50){
            setweatherImage(cloud95_100)
        }
        else if( RainData>50 && RainData<=60){
            setweatherImage(Rain50_60)
        }
        else if( RainData>60 && RainData<=70){
            setweatherImage(Rain60_70)
        }
        else if( RainData>70 && RainData<=80){
            setweatherImage(Rain70_80)
        }
        else if( RainData>80 && RainData<=90){
            setweatherImage(Rain80_90)
        }
        else if( RainData>90 && RainData<=95){
            setweatherImage(Rain90_95)
        }
        else if( RainData>95 && RainData<=100){
            setweatherImage(Rain95_100)
        }
        else{
            setweatherImage(sunset)
        }
    }

    const currentDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    // var arr = ["sagar","sachin","mahendra","Ramunajan","Manoje","Surendra","sagar","sachin","mahendra","Ramunajan","Manoje","Surendra"];

    var element = [];

    for(var i=0;i<daydata.length;i++){
        element.push(
            <ForcastCad key={i} dateTime={daydata[i].datetime} temp={daydata[i].temp} temMax={daydata[i].tempmax} temMin={daydata[i].tempmin} condti={daydata[i].conditions} rainChance={daydata[i].precipprob}/>

            // <ForcastCad key={i} dateTime={"daydata[i].datetime"} temp={"da"} temMax={"da."} temMin={"te"} condti={"daydata[i].conditions"} rainChance={"da"}/>
        )
    }

    function searchCity(){
    
        const inputElement = document.getElementById('myInput');
        const inputValue = inputElement.value;
        setCity(inputValue);
        // console.log(inputValue);
    }

    const lod = document.getElementById("lodingPAGE");
    const bod = document.body;
    if(loading === false){
        lod.style.display = 'none';
        bod.style.overflow = 'scroll';
    }
    // else{
    //     lod.style.display = 'flex';
    //     body.style.overflow = 'hidden';
    // }

    console.log(loading);
  return (
    <>
        <div className="background"></div> 
        <div className="home"> 
            <div className='left_portion'> 
                    <div className="search-container">
                        <input className="input" id="myInput" type="text" placeholder='search city'/>
                        <svg onClick={searchCity} viewBox="0 0 24 24" className="search__icon">
                            <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                            </path>
                            </g>
                        </svg>
                   </div>

                <div className="cardTem">
                    <div className="cardTem-header">
                        <span>{resAddr}</span>
                        <h3 style={{color:"gray",margin:"0"}}>{formattedDate}</h3>
                        <h3 style={{color:"white",margin:'0'}}>Current Conditions of Rain   {rain}%</h3>
                    </div>

                    <span className="tempCurr">{currTemp}°</span>

                    <div className="temp-scale">
                        <span>Celcius</span>
                    </div>
                </div>
                <TempratureCard img={weatherImage} address={address} des={description} humid={humidity} condit={conditions} cloudCov={cloudcover}/>
            </div>
            <div className='right_portion'>
                <h1 className='day15forcast'>Forecast: 15-Day Weather Forecast</h1>
                <div className='forcast'>
                    {element}
                </div>
            </div>
        </div>
        <Footer toTemp={todaydata.temp} maxTe={todaydata.tempmax} minTe={todaydata.tempmin} date={formattedDate} time={todaydata.datetime} rainchan={todaydata.precipprob} raindes={todaydata.conditions}/>
    </>
  )
}
