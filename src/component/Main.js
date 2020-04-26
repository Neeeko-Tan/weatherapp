import React from 'react';

import WeatherCondition from './weatherCondition';
import WeatherForcast from './weatherForecast';


function Main() {
  return (
    <main>
      <WeatherCondition /> 
      <WeatherForcast /> 
    </main>
  );
}

export default Main;