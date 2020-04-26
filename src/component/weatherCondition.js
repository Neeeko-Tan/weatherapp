import React from 'react';


function WeatherCondition(props) {
    
    return (
      <section className="weather-condition">
        <div className="weather-condition__location">Brisban</div>
       
        <div className="weather-condition__temp">19 c</div>
        <div className="weather-condition__desc">
          <div>
            <img src={require("../icon/icon-umberella.png")} alt="icon-umberella"/>
            <span className="citem">20 %</span>
          </div>
          <div>
            <img src={require("../icon/icon-wind.png")} alt="icon-wind" /> <span className="citem">20 km/h</span>
          </div>
          <div>
            <img src={require("../icon/icon-compass.png")} alt="icon-compass"/> <span className="citem">NE</span>
          </div>
        </div>
      </section>
    )
    
  
}

export default WeatherCondition;