const defaultState = {
    products: [
        {
            products_image: '../../assets/head.png',
            products_name: 'Headphones',
            hx: ' sdfsdf'
        },
        {
            products_image: '../../assets/head.png',
            products_name: 'Headphones',
            hx: 'sdfsdfx xxx xfdsdfsdf '
        },
        {
            products_image: '../../assets/head.png',
            products_name: 'Headphones',
            hx: ';,;l,;l'
        },
        {
            products_image: '../../assets/head.png',
            products_name: 'Headphones',
            hx: 'vbcvbc '
        },
        
    ]
}

function cartProducts(state = defaultState, action) {
    switch (action.type) {
        default:
            return (state)
    }
}

export default cartProducts;