import React from "react";
import './Navbar.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const history = useHistory();
  const handleSignIn = () => {
    history.push('/login')
  }
  const handleCartIcon = () => {
    history.push('/cart')
  }
  const noOfItems=useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="navbar">
      <h1>E-Store</h1>
      <ul className="navbar__List">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/">Blog</a>
        <a href="/contact">Contact</a>
      </ul>
      <div className="cart-icon">
      <p>{noOfItems}</p>
      <AddShoppingCartIcon className="cartIcon" fontSize="large" onClick={handleCartIcon}/>
      </div>
      <button onClick={handleSignIn} className="signIn__btn">Sign In</button>
    </nav>
  );
}

export default Navbar;
