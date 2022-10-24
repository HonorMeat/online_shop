import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import './products.sass'

function Products() {
    const dispatch = useDispatch()

    const products = useSelector(state => state.cartProducts.products)

    const addItemHandler = () => {
        dispatch({
            type: "ADD_AT_CART"
        })
    }

    return (
        <div className="products_page">
            <div className="container">
                {
                    products.map((product, i) =>
                        <div className="item" key={i}>
                            <img className="item_photo" onClick={() => addItemHandler()} src={product.products_image} alt='Headphone' />
                            <h1 className="item_name">{product.products_name}</h1>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Products;