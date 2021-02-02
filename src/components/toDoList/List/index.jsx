import React from 'react'
import AppTodos from '../AppTodos'

class AppList extends React.Component{

    OnHandleDelete(id){
        this.props.ReduceTodoItem(id)
    }
    render(){
        const todoList = this.props.data.map(({id, text, complete}, index) => {
            return <AppTodos 
                    key = {index}
                    id = {id}
                    text = {text}
                    complete = {complete}
                    OnHandleDelete = {this.OnHandleDelete.bind(this)}
                /> 
        })
        return(
            <div>
                {todoList}
            </div>
        )
    }
}

export default AppList