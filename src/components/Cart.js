import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";
import "./Cart.css";
import CartItem from "./CartItem";
function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartValue = useSelector((state) => state.cart.finalPrice);
  const dispatch = useDispatch();
  const addtoCartHandler = (data) => {
    dispatch(cartActions.addToCart(data));
  };
  const removefromCartHandler = (data) => {
    dispatch(cartActions.removeItem(data));
  };

  return (
    <div className="cart">
      <div className="cart__heading">
        <h1>Your Cart</h1>
      </div>
      {cartItems.map((data) => (
        <CartItem 
        img={data.img}
        title={data.title}
        totalPrice={data.totalPrice}
        quantity={data.quantity}
        handleAddtoCart={() => addtoCartHandler(data)}
        handleRemoveFromCart={() => removefromCartHandler(data.id)}
      />
      ))}
      <h1>Subtotal is : Rs.{cartValue}</h1>
      <button className ="checkout__btn">Checkout</button>
    </div>
  );
}

export default Cart;
