import React, { useRef } from "react";
import "./CartItem.css";

function CartItem({
  title,
  price,
  quantity,
  removeFromCart,
  updateQuantity,
  stock,
}) {
  const quantitySpan = useRef(null);

  const  checkStock = () => {
    console.log(stock)
    if (quantitySpan.current.value > stock) {
      quantitySpan.current.value = stock;
    }
  }

  return (
    <div className="cart-item">
      <p>{title}</p>
      <p className="price">costo unidad ${price}</p>

      <div className="remove">
        <div>
          <button onClick={removeFromCart}>Remove</button>
        </div>
        <div>
          <button
            className="increment"
            onClick={() => updateQuantity(title, true)}
          >
            +
          </button>
          <span ref={quantitySpan}>{quantity}</span>
          <button
            className="increment"
            onClick={() => {
              updateQuantity(title, false);
            }}
          >
            -
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartItem;
