import React from 'react'
import Temperature from './TemperatureInput'



function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.OnTemperature = this.OnTemperature.bind(this);
        this.state = {
            temperature: '', 
            scale: 'c'
        }
    }

    handleCelsiusChange(value){
        this.setState({temperature: value, scale: 'c'});
    }

    handleFahrenheitChange(value){
        this.setState({temperature: value, scale: 'f'});
    }

    render() {
        let scale = this.props.scale;
        return (
            <div>
                <Temperature
                 scale='c' 
                 temperature={this.state.temperature}
                 OnTemperature={this.OnTemperature}
                 />
                <Temperature
                 scale='f' 
                 temperature={this.state.temperature}
                 OnTemperature={this.OnTemperature}
                 />
            </div>
        )
    }
}

export default Calculator