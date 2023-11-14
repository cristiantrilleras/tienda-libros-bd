import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import Swal from 'sweetalert2'



function Cart({ cart, removeFromCart, updateQuantity, setCart }) {
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const checkout = () => {
    
    cart.forEach((element) => {
      fetch(
        `http://localhost:10101/removequantity?id=${element.id}&&quantity=${element.quantity}`, {
          method: "POST"
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
    setCart([]); // Vacía el carrito
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra realizada con exito!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="cart">
      <img
        src="https://th.bing.com/th/id/R.d41b0f0ab9fb615c319ffaeb2b1ec506?rik=PP4z381RlSeRjg&riu=http%3a%2f%2ficon-park.com%2fimagefiles%2fshopping_cart_light_orange.png&ehk=IBLAzmeN%2b%2bBBBoUN76O28ni8e0TN1ifCsCSPUaagoYg%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="logocart"
      />
      <h2>Shopping Cart</h2>
      <br />

      {cart.map((item) => (
        <CartItem
          key={crypto.randomUUID}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          stock={item.stock}
          updateQuantity={updateQuantity}
          removeFromCart={() => removeFromCart(item)}
        />
      ))}
      <div className="total">Total: ${getTotal().toFixed(2)}</div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
