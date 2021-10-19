import React from "react";
import "./ProdSection.css";
import Cards from "../UI/Cards";
import { useHistory } from "react-router-dom";
function ProdSection() {
  let history = useHistory();
  const handleProductsPage = () => {
    history.push("/products");
  };

  return (
    <div className="productSection" id="category">
      <div className="prodSection__Intro">
        <h3>Choose your Style</h3>
        <span>Available 30+ more brand to shop for</span>
      </div>
      <div className="productSection__Card">
        <Cards
          name="Mens Section"
          image="https://image.freepik.com/free-photo/close-up-hand-male-holding-multiple-shopping-bag_1150-47111.jpg"
          btnHandler={handleProductsPage}
        />
        <Cards
          name="Women Section"
          image="https://st.depositphotos.com/2069323/2156/i/600/depositphotos_21565261-stock-photo-shopping-woman-holding-shopping-bags.jpg"
          btnHandler={handleProductsPage}
        />
        <Cards
          name="Kids Section"
          image="https://media.istockphoto.com/photos/little-child-loking-at-showcase-and-choosing-toys-at-the-kids-store-picture-id1148601110?k=20&m=1148601110&s=612x612&w=0&h=4_bjxAZjw4YYpAW-_T5Y4eBtJMeJhp3IR_vgYMis_zk="
          btnHandler={handleProductsPage}
        />
      </div>
    </div>
  );
}

export default ProdSection;
