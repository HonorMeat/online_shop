import React from "react";
import { useSelector } from 'react-redux'

import './cart.sass'

function CartPage() {
    const amount = useSelector(state => state.cartReducer.amount)

    return (
        <div className="cart_page">
            <div className="container">
                {
                    amount === 0 ?
                        <div className="chlen">CHLEN</div>
                        :
                        <div className="cart_page__products">
                            <h2 className="cart_page__products_head">Your shopping cart:</h2>
                            <div className="cart_page__products_list">
                                <div className="cart_page__products_list_item">

                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default CartPage;