import React from 'react'
import './index.scss'

class Select extends React.Component{
    
    onHandleChange(e){
        console.log(e.value);
    }

    render(){
        const selectDom = this.props.data.map((item, index) => {
            return <option key={index}>{item}</option>
        })
        return (
            <select 
            className = 'sk-select'
            value={this.props.selectedData}
            onChange={this.onHandleChange}
            >
                {selectDom}
            </select>
        )
    }
}

export default Select