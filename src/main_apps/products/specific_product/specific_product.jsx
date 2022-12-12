import React from "react";
import { useSelector } from "react-redux";

function SpecificProduct(key){
    const products = useSelector(state => state.cartProducts.products)

    return(
        <section className="specific_product">
            <h1>{products[key].hx}</h1>
            <h2>chlen</h2>
        </section>
    )
}

export default SpecificProduct;