import React from 'react'
// import style from './index.scss'

class AppForm extends React.Component{
    addItem(){
        this.props.AddTodoItem({id:'3', text: '新增代办', complete: false})
    }
    render(){
        return(
            <div>
                <div className='filed'>
                    <input type="text" placeholder='Todo' ref='text' />
                </div>
                <button type='submit' onClick={this.addItem.bind(this)}>添加</button>
            </div>
        )
    }
}

export default AppForm