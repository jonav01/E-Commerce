import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner" id="home">
      <img
        src="https://media.istockphoto.com/photos/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?k=20&m=1193750118&s=612x612&w=0&h=w46Bjw0TuNVSKHOWtMyVIRfvzZ2JSRP4w7Zm02oqCFE="
        alt="bannerImage"
        className="banner__Img"
      />
      <div className="banner__Text">
        <h3>Shopping Spree</h3>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </div>
  );
}
export default Banner;
