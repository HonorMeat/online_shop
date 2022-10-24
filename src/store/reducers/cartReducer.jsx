const defaultState = {
    amount: 0,
}

function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case "ADD_AT_CART":
            return{...state, amount: state.amount + action.payload};
        default:
            return(state);
    }
}

export default cartReducer;