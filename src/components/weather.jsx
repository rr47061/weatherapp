import React , {Component} from 'react';

class Weather extends Component {
    render() {
        return (<div>
            {/*<div> temperature: {this.props.temperature} * celcius </div>*/}
            {/*<div>description: {this.props.description} </div>*/}
            {/*<div>city:{this.props.city}</div>*/}
            {/*<div>country:{this.props.country}</div>*/}
            {/*<div>humidity:{this.props.humidity}</div>*/}
            {this.props.city && this.props.country && <p>Location: {this.props.city} , { this.props.country} </p> }
            {this.props.temperature && <p>Temperature: {this.props.temperature} </p>}
            {this.props.humidity && <p> Humidity: {this.props.humidity}</p> }
            {this.props.description && <p> Description: {this.props.description}</p>}
            {this.props.error && <p>{this.props.error}</p>}
        </div>);

    }
}

export default Weather;
