import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import "./TopBar.scss";
const TopBar = () => {
  return (
    <div className="top">
      {/* logo image  */}
      <div className="logo">
        <img src="../../assets/images/logo.png" alt="Logo" />
      </div>

      {/* searchbar */}
      <div className="search">
        <input className="input" type="text" placeholder="Search here" />

        <div className="search-icon">
          <AiOutlineSearch size={20} color="white" />
        </div>
      </div>

      {/* accounts and carts  */}
      <div className="right-section">
        <div className="common">
          <AiOutlineUser size={20} color="white" />
          <p>My Profile</p>
        </div>

        <div className="common">
          <AiOutlineHeart color="white" size={20} />
          <p>My Items</p>
        </div>
        <div className="common">
          <AiOutlineShoppingCart size={20} color="white" />
        </div>
        <div className="common">
          <FiMenu size={20} color="white" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
