import React, { Fragment } from "react";
import "./Admin.css";
import "./SignIn.css";
import useInput from "../hooks/use-input";
function Admin() {
  const {
    value: prodTitle,
    valueIsTouched: prodTitleIsTouched,
    valueIsValid: prodTitleIsValid,
    handleValueChange: handleprodTitleChange,
    handleValueBlurChange: handleprodTitleBlurChange,
  } = useInput((v) => v.trim() !== "");
  const {
    value: price,
    valueIsTouched: priceIsTouched,
    valueIsValid: priceIsValid,
    handleValueChange: handlePriceChange,
    handleValueBlurChange: handlePriceBlurChange,
  } = useInput((v) => v >= 0);
  return (
    <Fragment>
      <div className="adminPanel">
        <div className="adminPanel__leftSection">
          <a href="/">Admin</a>
        </div>
        <form className="loginForm">
          <label>Title</label>
          <input
            type="text"
            className={`${
              prodTitleIsTouched && !prodTitleIsValid && "invalid"
            }`}
            value={prodTitle}
            onChange={handleprodTitleChange}
            onBlur={handleprodTitleBlurChange}
            placeholder="Enter the title of the Product"
          />
          {(prodTitleIsTouched && !prodTitleIsValid) && <p>Name field cannot be empty </p>}
          <label>Price</label>
          <input
            className={`${(priceIsTouched && !priceIsValid) && "invalid"}`}
            type="number"
            value={price}
            onChange={handlePriceChange}
            onBlur={handlePriceBlurChange}
            data-type="currency"
            placeholder="₹1000000"
          />
          {(priceIsTouched && !priceIsValid) && <p>Price cannot be less than 0</p>}
          <label>Upload your Image</label>
          <input type="file" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Admin;
