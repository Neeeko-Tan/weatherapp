import React from 'react';
//import axios from 'axios';//npm i axios
import { format } from 'date-fns';//npm i date-fns

import ForecastRow from './forecastRow';

class WeatherForcast extends React.Component {
   
	render() {
        const { limit } = this.props;
        const forecasts = this.props.forecasts.slice(0, limit);

        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button 
                        className={`forecast__switch_0 ${limit === 5 ? ' switch-active' : ''}`}
                        onClick={() => this.props.handleChangeLimit(5)}
                    >
                        5 items
                    </button>
                    <button 
                        className={`forecast__switch_1${limit === 10 ? ' switch-active' : ''}`}
                        onClick={() => this.props.handleChangeLimit(10)}
                    >
                        10 items
                    </button>
                </div>
                {
                    
                    forecasts.map(forecast => {
                        const date = new Date(forecast.time * 1000);
                        const day = format(date, 'EEE');
                        const time = format(date, 'HH:mm');

                        return (
                            <ForecastRow
                                key = {forecast.time * 1000}
                                day = {day}
                                high = {forecast.maxCelsius}
                                low = {forecast.minCelsius}
                                time = {time} 
                            />
                        );
                    })
                        
                    
                }
            </section>
        );
        
    }
}

// function WeatherForcast() {
//     return (
//         <section className="weather-forecast">
//             <div className="forecast__switch">
//                 <button className="forecast__switch_0 switch-active">
//                     5 items
//                 </button>
//                 <button className="forecast__switch_1" >
//                     10 items
//                 </button>
//             </div>
//             <ForecastRow
//                 day= "Fri"
//                 high="19c"
//                 low="8c"
//                 time="10:00"
//             />
//             <ForecastRow
//                 day= "Sat"
//                 high="19c"
//                 low="8c"
//                 time="10:00"
//             />
//             <ForecastRow
//                 day= "Sun"
//                 high="19c"
//                 low="8c"
//                 time="10:00"
//             />
//         </section>
//     )
// }

export default WeatherForcast;