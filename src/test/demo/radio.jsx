import React, { Component } from 'react';
import Radio from '../../components/Radio';

class SimpleRadio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            levelArr: [
                {id: 1, lable: '幼年'},
                {id: 2, lable: '青年'},
                {id: 3, lable: '中年'},
                {id: 4, lable: '老年'},
            ]
         }
    }
    render() { 
        return ( 
            <div>
                <Radio radioData = {this.state.levelArr} value={1} />
            </div>
         );
    }
}
 
export default SimpleRadio;