import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

let productsData = [
    {
        category: "Sporting Goods",
        products: [
            {price: "$49.99", stocked: true, name: "Football", id: 1},
            {price: "$9.99", stocked: true, name: "Baseball", id: 2 },
            {price: "$29.99", stocked: false, name: "Basketball", id: 3}
        ]
    },
    {
        category: "Electronics",
        products: [
            {
                price: "$99.99", stocked: true, name: "iPod Touch", id: 4
            },{
                price: "$399.99", stocked: false, name: "iPhone 5", id: 5
            },{
                price: "$199.99", stocked: true, name: "Nexus 7", id: 6
            }
        ]
    }
]

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxStatus = this.handleCheckboxStatus.bind(this);
        this.state = {
            inputValue: '',
            checkboxChecked: false,
            productsData: productsData
        }
    }

    handleInputChange(value){
        this.setState({inputValue: value})
    }

    handleCheckboxStatus(){
        var val = !this.state.checkboxChecked;
        this.setState({checkboxChecked: val})
    }

    render(){
        return(
            <div>
                <SearchBar 
                    value={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleCheckboxStatus={this.handleCheckboxStatus} 
                />
                <ProductTable 
                    productsData={this.state.productsData}
                />
            </div>
        )
    }
}

export default FilterableProductTable