import React, { useContext, useState } from "react";
import "./header.css";
import headerImg from "../assets/meals.jpg";
import Modal from "../Modal/Modal";
import CartContext from "../hooks/cartContext";

const Header = () => {
  const [toggleState, setToggleState] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartItemAmount = cartCtx.cartItems.reduce(
    (res, item) => res + item.amount,
    0
  );
  const handleCloseState = (state: boolean) => {
    setToggleState(state);
  };

  return (
    <>
      <div className={toggleState === true ? "active modal" : "modal"}>
        <Modal handleClose={handleCloseState} />
      </div>
      <header className="header container">
        <h1>ReactMeals</h1>
        <button className="button" onClick={() => setToggleState(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="cart-icon"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
          <p>Your Cart</p>
          <span className="number">{cartItemAmount}</span>
        </button>
      </header>
      <div className="header-img">
        <img src={headerImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
