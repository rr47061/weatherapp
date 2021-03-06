import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import {Cell, Grid} from "react-mdl";
import {Container, Image} from "react-bootstrap";

const API_KEY =  '575d1618c948f762a2f9a2dda2538007';


class App extends Component {
// constructor(props)
// {
//   super(props);
//     this.state = {
//
//     };
//   this.getWeather = this.getWeather.bind(this);
// }
// getWeather()

 // to display data on screen
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined

    };

  getWeather = async (e) => {   // async is used for asynchornous call to api
    e.preventDefault();

    const city = e.target.elements.city.value;
    const  country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if(city && country){
        console.log(data);
        //defining the state
        this.setState({
            temperature: data.main.temp-273.15,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
    }
    else {
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "please enter the value !!"
        });
    }
  };

  render() {
    return (
     <Container className="container-fluid" style={{background:"black", width: "70%", height: "70%" , margin: "auto"}}>
         <Title />


       <Form getWeather={this.getWeather}/>
       {/*sending data to the weather class*/}
       <Weather
       temperature = {this.state.temperature}
       city={this.state.city}
       country={this.state.country}
       description={this.state.description}
       humidity={this.state.humidity}
       error = {this.state.error}
       />
     </Container>
    );
  }
}

export default App;
