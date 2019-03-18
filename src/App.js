import React, { Component } from 'react';
import './App.css';
//import Title from './components/title';
import Form from './components/form';
//import Weather from './components/weather';

const API_KEY =  '575d1618c948f762a2f9a2dda2538007';


class App extends Component {
// constructor(props)
// {
//   super(props);
//   this.getWeather = this.getWeather.bind(this);
// }
// getWeather()

  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
     <div>
       {/*<Title/>*/}
       <Form getWeather={this.getWeather}/>
       {/*<Weather/>*/}
      </div>
    );
  }
}

export default App;
