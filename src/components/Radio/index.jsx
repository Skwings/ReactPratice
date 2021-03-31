import React, { Component } from 'react';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    change(e) {
        console.log(e.value);
    }

    render() { 
        const {radioData, value} = this.props;
        const radio = radioData.map((item, key) => {
            return (
                <span key={item.id}>
                    <input 
                        type="radio"
                        checked={item.id === value} 
                        onChange={this.change.bind(this)}
                    />
                    <span>{item.lable}</span>
                </span>
            )
        })
        return ( 
            <div>
                {radio}
            </div>
         );
    }
}
 
export default Radio;