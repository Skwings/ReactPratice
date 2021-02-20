import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const productsData = this.props.productsData;
        const categoryArr = new Set([]);
        for (let item of productsData) {
            categoryArr.add(item.category)
        }
        const ProductRowList = productsData.map((item2, index2) => {
            return (
                <ProductCategoryRow
                    productsData={item2.products}
                    category = {item2.category}
                    key={index2}
                />
            )

        })
        // console.log(productRow);
        return (
            <div>
                <div>
                    <span>Name</span>
                    <span>Price</span>
                </div>
                {ProductRowList}
            </div>
        )
    }
}

export default ProductTable