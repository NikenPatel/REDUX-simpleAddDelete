import { ADD_ITEMS, DELETE_ITEMS } from "../actionTypes/actionType"

const addItem = () => {
    return {
        type : ADD_ITEMS
    }
}

const deleteItem = () => {
    return {
        type : DELETE_ITEMS
    }
}

export {addItem , deleteItem}