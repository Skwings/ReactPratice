import React from 'react'
import Temperature from './TemperatureInput'



function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseInt(temperature);
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange(value) {
        this.setState({ temperature: value, scale: 'c' });
    }

    handleFahrenheitChange(value) {
        this.setState({ temperature: value, scale: 'f' });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <Temperature
                    scale='c'
                    temperature={celsius}
                    OnTemperature={this.handleCelsiusChange}
                />
                <Temperature
                    scale='f'
                    temperature={fahrenheit}
                    OnTemperature={this.handleFahrenheitChange}
                />
            </div>
        )
    }
}

export default Calculator