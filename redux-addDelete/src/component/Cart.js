import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../action/cartAction";

export const Cart = () => {

const state = useSelector((state)=> state);
const dispatch = useDispatch();
    return (
        <div className="cart">
            <h1>Number items of cart : {state.numOfItems}</h1>
            <button onClick={() => dispatch(addItem())} className="green">Addd item</button>
            <button onClick={() => dispatch(deleteItem())} className="red">Delete Item</button>
        </div>
    )
}