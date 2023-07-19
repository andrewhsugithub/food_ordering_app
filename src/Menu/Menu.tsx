import React from "react";
import "./menu.css";
import MenuForm from "./MenuForm";

const Menu = () => {
  const menuList: RawMenuItem[] = [
    {
      id: "0",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "1",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "2",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "3",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <section className="menu">
      {menuList.map((item) => {
        return (
          <ul className="menu-item" key={item.id}>
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <MenuForm item={item} />
          </ul>
        );
      })}
    </section>
  );
};

export default Menu;
