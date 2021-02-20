import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleValue = this.handleValue.bind(this);
        this.handleCheckStatus = this.handleCheckStatus.bind(this)
    }

    handleValue(e) {
        this.props.handleInputChange(e.target.value)
    }

    handleCheckStatus() {
        this.props.handleCheckboxStatus()
    }

    render() {
        return (
            <div>
                <input type="text"
                    placeholder='Search...'
                    value={this.props.value}
                    onChange={this.handleValue}
                />
                <div>
                    <input type="checkbox"
                        onChange={this.handleCheckStatus}
                    />
                    <span>Only show Products in Stock</span>
                </div>
            </div>
        )
    }
}

export default SearchBar