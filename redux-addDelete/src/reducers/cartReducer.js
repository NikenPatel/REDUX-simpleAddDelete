import { ADD_ITEMS, DELETE_ITEMS } from "../actionTypes/actionType"

const initialState = {
    numOfItems: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
            }

        case DELETE_ITEMS:
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
            }

        default:
            return state;
    }
}