import React from 'react'
import simpleHoc from './simpleHoc'

class Usual extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                1
            </div>
        )
    }
}

const MyUsual = simpleHoc(Usual);

export default MyUsual;