import React from 'react';

import WeatherCondition from './weatherCondition';
import WeatherForcast from './weatherForecast';


function Main(props) {
  return (
    <main>
      <WeatherCondition /> 
      <WeatherForcast 
        forecasts={props.forecasts}
        handleChangeLimit={props.handleChangeLimit}
        limit={props.limit}
      /> 
    </main>
  );
}

export default Main;