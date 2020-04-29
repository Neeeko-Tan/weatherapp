
import './App.css';
import React from 'react';
import axios from 'axios';//npm i axios

import Header from './component/Header';
import Navigation from './component/Navigation';
import Main from './component/Main';
import Footer from './component//Footer';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

      forecasts: [],
      limit: 5
    }
  }

  async componentDidMount(){
    try {
      const response = await axios('https://jr-weather-api.herokuapp.com/api/weather?city=brisbane&cc=au')
      const data = response.data.data;
      const cityName = data.city.name;
      const current = data.current;
      const forecasts = data.forecast.slice(0, 10);
      this.setState({ cityName, current, forecasts });
    
    } catch (err) {
       console.log(err)
    }

  }
  // componentDidMount() { 
  //   axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane') 
  //     .then(res => { 
  //   const data = res.data.data; 
  //   const cityName = data.city.name; 
  //   const current = data.current; 
  //   const forecasts = data.forecast.slice(0, 10); 
  //   this.setState({ cityName, current, forecasts }); 
  //   }); 
  // }

  handleChangeLimit = limit => {
    this.setState({ limit });
  }
  render(){
    return(
      <div className="weather-channel__container">
        <Header />
        <Navigation />
        <Main 
          cityName={this.state.cityName}
          current={this.state.current}   
          forecasts={this.state.forecasts}
          handleChangeLimit={this.handleChangeLimit}
          limit={this.state.limit}  
        />
        <Footer />
      </div>
    )
  }
}

export default App;