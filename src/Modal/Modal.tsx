import React, { FC, useContext } from "react";
import styles from "./Modal.module.css";
import CartContext from "../hooks/cartContext";

interface ModalProps {
  handleClose: (state: boolean) => void;
}

const Modal: FC<ModalProps> = ({ handleClose }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const boughtItems = cartCtx.cartItems;
  const hasItems = boughtItems.length > 0;

  return (
    <section className={styles.backdrop}>
      <div className={styles.modal}>
        <ul className={styles.bought_list}>
          {boughtItems.map((item) => {
            return (
              <li key={item.id} className={styles.bought_item}>
                <div>
                  <h1>{item.name}</h1>
                  <div className={styles.bought_info}>
                    <p>${item.price.toFixed(2)}</p>
                    <span>x {item.amount}</span>
                  </div>
                </div>
                <div className={styles.bought_button}>
                  <button
                    onClick={() => cartCtx.removeItem({ ...item, amount: 1 })}
                  >
                    -
                  </button>
                  <button
                    onClick={() => cartCtx.addItem({ ...item, amount: 1 })}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.total}>
          <h1>Total Amount</h1>
          <h1>${totalAmount}</h1>
        </div>
        <div className={styles.action}>
          <button onClick={() => handleClose(false)}>Close</button>
          {hasItems && <button>Order</button>}
        </div>
      </div>
    </section>
  );
};

export default Modal;
