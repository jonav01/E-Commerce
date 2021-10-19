import React from "react";
import "./Products.css";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store";
import Products from "./ProdArray";
function Product() {
  const dispatch = useDispatch();
  function handleAddtoCart(data) {
    dispatch(cartActions.addToCart(data));
  }
  return (
    <Fragment>
      <h2 className="header">Products</h2>
      <div className="products">
        {Products.map((data) => {
          return (
            <div className="products__List">
              <img className="prod__img" src={data.img} alt="prod__img" />
              <div className="products__ListAbout">
                <h3>{data.title}</h3>
                <span>Price : Rs.{data.price}</span>
                <span>Rating : {data.rating} / 5 </span>
                <div className="cartAdding__btn">
                  <button onClick={() => handleAddtoCart(data)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Product;
