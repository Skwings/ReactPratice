import React from 'react'
import MyUsual from './Usual.jsx'

class Father extends React.Component{
    state= {
        name: [
            {name: 111},
            {name: 222}
        ]
    }
    render(){
        <MyUsual name={this.state.name} />
    }
}