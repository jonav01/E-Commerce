import React from "react";
import "./Cart.css";

function CartItem({
  img,
  title,
  totalPrice,
  quantity,
  handleAddtoCart,
  handleRemoveFromCart,
}) {
  return (
    <div className="cart__contents">
      <img src={img} alt="Product img" className="cartContent__img" />
      <div className="cart__contentDetails">
        <p>{title}</p>
        <span>Rs.{totalPrice}</span>
        <div className="cart__ContentBtns">
          <button onClick={handleAddtoCart}>+</button>
          <span>{quantity}</span>
          <button onClick={handleRemoveFromCart}>-</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
