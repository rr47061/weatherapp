import React , {Component} from 'react';

class Form  extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city.."/>
                <input type="text" name="country" placeholder="country.."/>
                <button>Get weather</button>
                <h1>hello</h1>
                <h2>hello new</h2>



            </form>
         );

    }
};

export default Form
