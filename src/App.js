import { Fragment, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProdSection from "./components/ProdSection";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, sendCartData } from "./store/cart-actions";
// import Carousel from "./UI/Carousel";
function App() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  useEffect(() => {
    if (cartData.totalQuantity >= 0) {
      dispatch(sendCartData(cartData));
    }
  }, [cartData, dispatch]);
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Banner />
            {/* <Carousel /> */}
            <ProdSection />
            <Footer />
          </Route>
          <Route path="/products">
            <Navbar />
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
