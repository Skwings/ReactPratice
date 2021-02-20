import React from 'react'
// import NotesList from './test/demo/NotesList'
// import Input from './test/demo/Input'
import ToDoList from './components/toDoList'
import Select from './components/select'
import MyUsual from './test/demo/Usual.jsx'
import Boiling from './components/BoilingVerdict'
import FilterableProductTable from './components/FilterableProductTable'
import '@/redux'

class App extends React.Component {
  state = {
      data: ['Volvo', 'Saab', 'Mercedes', 'Audi'],
      selectedData: 'Saab',
      name: [
        {name: 111},
        {name: 222}
      ]
  }

  render(h) {
    const data = this.state.data;
    return (
      <div>
        <ToDoList />
        <Select 
          data={data}
          selectedData = {this.state.selectedData}
        />
        <MyUsual name={this.state.name} />
        <Boiling />
        <FilterableProductTable />
      </div>
    )
  }
}

export default App;
