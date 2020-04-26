import React from 'react';
import axios from 'axios';//npm i axios
import { format } from 'date-fns';//npm i date-fns

import ForecastRow from './forecastRow';

class WeatherForcast extends React.Component {
    state = {
        forecasts: [
            // {
            //     day: "Fri",
            //     high: "19 c",
            //     low: "8 c",
            //     time: "10:00"
            // },
            // {
            //     day: "Sat",
            //     high: "19 c",
            //     low: "8 c",
            //     time: "10:00"
            // },
            // {
            //     day: "Sun",
            //     high: "19 c",
            //     low: "8 c",
            //     time: "10:00"
            // }
        ]
    }

    componentDidMount() {
        axios.get('https://jr-weather-api.herokuapp.com/api/weather?city=brisbane&cc=au')
            .then(response => {
                const rawforecasts = response.data.data.forecast.slice(0,10);
                const forecasts = rawforecasts.map(rawforecast => {
                    const date = new Date(rawforecast.time * 1000);
                    const day = format(date, 'EEE');
                    const time = format(date, 'HH:mm');
                    return {
                        ...rawforecast,
                        day,
                        time
                    }
                })
                this.setState({ forecasts });
            })
    }

	render() {
       

        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className="forecast__switch_0 switch-active">
                        5 items
                    </button>
                    <button className="forecast__switch_1" >
                        10 items
                    </button>
                </div>
                {
                    
                    this.state.forecasts.map(forecast => (
                        <ForecastRow
                            key = {forecast.day + forecast.time}
                            day = {forecast.day}
                            high = {forecast.maxCelsius}
                            low = {forecast.minCelsius}
                            time = {forecast.time} 
                        />
                    ))
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