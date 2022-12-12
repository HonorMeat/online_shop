const defaultState = {
    shownPage: 'mainPage'
}

function switchPageReducer(state=defaultState, action) {
    switch(action.type) {
        case "GET_MAIN_PAGE":
            return{...state, shownPage: 'mainPage'}
        case "GET_CART_PAGE":
            return{...state, shownPage: 'cartPage'}
        case "GET_SWITCH_PAGE":
            return{...state, shownPage: 'specificPage'}
        default:
            return{...state, shownPage: 'mainPage'}
    }
}

export default switchPageReducer;