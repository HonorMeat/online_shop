import React from "react";
import { useSelector } from 'react-redux';

import './main_page.sass'

import Header from '../main_apps/structure/header'

import Products from '../main_apps/products/products'
import SpecificPage from '../main_apps/products/specific_product/specific_product'

import Cart from '../main_apps/cart/cart'

function MainPage() {

    const shownPage = useSelector(state => state.switchPageReducer.shownPage);

    return (
        <div className="main_page">
            <Header />
            {(() => {
                switch(shownPage) {
                    case 'mainPage':
                        return (<Products />)
                    case 'cartPage':
                        return (<Cart />)
                    case 'specificPage':
                        return (<SpecificPage />)
                    default:
                        return (<Products />)
                }
            })()}

        </div>
    )
}

export default MainPage;