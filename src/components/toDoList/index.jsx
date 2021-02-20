import React from 'react'
import AppList from './List'
import AppFooter from './AppFooter'
import AppForm from './AppForm'

class TodoList extends React.Component {
  state = {
    data: [
      { id: 0, text: 'FineWeather', complete: false },
      { id: 1, text: 'MathNote', complete: false },
      { id: 2, text: 'Reading', complete: true },
    ]
  }

  OnChangeComplete(id){
    let newData = this.props.data.map((item, index) =>{
      if(id === item.id){
        item.complete = !item.complete
      }
      return item
    })
    this.setState({data: newData})
  }

  OnAddTodoItem( newItem ){
    let newData = this.state.data.concat(newItem);
    this.setState({data: newData});
  }

  OnReduceTodoItem( id ){
    let newData = this.state.data;
    for(let i = 0; i < newData.length;i++){
      if(id === newData[i].id){
        console.log(i)
        newData.splice(i--, 1);
      }
    }
    this.setState({data: newData})
  }

  render(h) {
    const data = this.state.data;
    return (
      <div>
        <div>
          <h1>My Todo With React</h1>
          <AppForm 
              AddTodoItem = {this.OnAddTodoItem.bind(this)}
          ></AppForm>
          <AppList data={data}
              ReduceTodoItem = {this.OnReduceTodoItem.bind(this)}
          ></AppList>
          <AppFooter></AppFooter>
        </div>
      </div>
    )
  }
}

export default TodoList;
