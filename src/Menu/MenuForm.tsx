import React, { FC, FormEvent, useContext, useRef } from "react";
import CartContext from "../hooks/cartContext";
import "./menu.css";

interface MenuFormProps {
  item: RawMenuItem;
}

const MenuForm: FC<MenuFormProps> = ({ item }) => {
  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current?.value;
    const enteredAmountNumber = +enteredAmount!; // + converts string to number
    cartCtx.addItem({ ...item, amount: enteredAmountNumber });
  };

  return (
    <form className="menu-buy" onSubmit={handleSubmit}>
      <div className="menu-amount">
        <label htmlFor={`amount${item.id}`}>Amount</label>
        <input
          ref={amountInputRef}
          type="number"
          id={`amount${item.id}`}
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MenuForm;
