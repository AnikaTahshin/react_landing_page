import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero">
      {/* <div className="unOrderList">
        <ul>
          <li>
            <a href="">Jewelry & Accessories</a>
          </li>
          <li>
            <a href="">Clothing & Shoes</a>
          </li>
          <li>
            <a href="">Home & Living</a>
          </li>
          <li>
            <a href="">Wedding & Party</a>
          </li>
          <li>
            <a href="">Toys & Entertainment</a>
          </li>
          <li>
            <a href="">Art & Collectibles</a>
          </li>
          
        </ul>
      </div> */}

      <div className="leftText">
        <p className="p1">100% QUALITY, 100% SATISFACTION</p>
        <p className="p2">Where the world comes to shop.</p>
        <p className="p3">
          Life is hard enough already. Let us make it a little easier, Vision of
          Snipshop for a better outlook.
        </p>
        <button className="btn">Shop Now</button>
      </div>

      <div className="rightDiv">
        <img src="../../../assets/images/dslr.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
