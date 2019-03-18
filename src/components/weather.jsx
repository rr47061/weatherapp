import React , {Component} from 'react';

class Weather extends Component {
    render() {
        return (<div>
            <div> temperature: {this.props.temperature} * celcius </div>
            <div>description: {this.props.description} </div>
            <div>city:{this.props.city}</div>
            <div>country:{this.props.country}</div>
            <div>humidity:{this.props.humidity}</div>
        </div>);

    }
}

export default Weather;
