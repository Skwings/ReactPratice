import React from 'react'

class Temperature extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.OnTemperature(e.target.value)
    }

    handleView(){
        if(this.state.temperature >= 100){
            return <p>水开了</p>
        }else{
            return <p>水没烧开</p>
        }
    }

    render(){
        const temperature = this.props.temperature;
        // const BoilingVerdict = this.handleView()
        const handleChange = this.props.handleChange;
        const {scale} = this.props;
        const scaleNames =  {
            c: 'Cesius',
            f: 'Fahrenheit'
        }
        return(
            <fieldset>
                <legend>请输入{scaleNames[scale]}温度：</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

export default Temperature;