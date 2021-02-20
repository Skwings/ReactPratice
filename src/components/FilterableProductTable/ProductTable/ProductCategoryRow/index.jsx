import React from 'react'

class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const productsData = this.props.productsData;
        const productRow = productsData.map((item, index) => {
            return (
                <div key={index}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                </div>
            )
        });
        return (
            <div>
                <p>{this.props.category}</p>
                {productRow}
            </div>
        )
    }
}

export default ProductCategoryRow