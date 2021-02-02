import { Component } from "react";

class Input extends Component{
    handleChange() {
        console.log(1111);
    }
    render(){
        // var value = this.state.value;
        return (
            <div>
                <input type="text" name="" id="" onChange={this.handleChange()} />
            </div>
        );
    }
}

export default Input