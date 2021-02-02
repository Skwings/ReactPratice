import React from 'react'

class AppFooter extends React.Component{
    render(){
        return(
            <div>
                <button 
                    type = 'submit'
                    className = ''
                    ref = 'allThings'
                >
                    全部
                </button>
                <button 
                    type = 'submit'
                    className = ''
                    ref = 'active'
                 >
                    未完成
                </button>
                <button 
                    type = 'submit'
                    className = ''
                    ref = 'complete'
                >
                    已完成
                </button>
            </div>
        )
    }
}

export default AppFooter