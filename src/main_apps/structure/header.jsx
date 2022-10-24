import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import './header.sass';

function Header() {
    const dispatch = useDispatch()
    const amount = useSelector(state => state.cartReducer.amount)

    const getCartPageHandler = () => {
        dispatch({
            type: "GET_CART_PAGE"
        })
    }

    const getMainPageHandler = () => {
        dispatch({
            type: "GET_MAIN_PAGE"
        })
    }

    return (
        <header className="main_page__header">
            <div className="container_header">
                <div className="main_page__header">
                    <div className="main_page__header_left"></div>
                    <h1 onClick={() => getMainPageHandler()} className="main_page__header_logo">audisics</h1>
                    <div className="main_page__header_right" onClick={() => getCartPageHandler()}>
                        <FontAwesomeIcon icon={faBagShopping} className="main_page__header_right__bag" />
                        {amount > 0 ? <div className="main_page__header_right__amount">{amount}</div> : null}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;