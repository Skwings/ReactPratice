import { Component } from 'react'
// function NotesList( props ){
//     return (
//         <div>Hello {props.name}</div>
//     );
// }

class Welcome extends Component{
    render(h) {
        return <div>Hello { this.props.name}</div>
    }
}

// Welcome.propsTypes = {
//     name: propsTypes.string
// }

export default Welcome