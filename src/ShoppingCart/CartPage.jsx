import React, { useContext } from "react";
import { CommonContext } from '../ShoppingCart/CommonContext'

export default function CartPage() {
  const { cartItems, removeToCart } = useContext(CommonContext)
  return (
    <div className="cart-container">
      <div className="cart-left">
        <h1 className="cart-title">
          YOUR CART <span className="line"></span>
        </h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <div className="cart-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="cart-details">
                <h3>{item.title}</h3>

                <div className="cart-price-size">
                  <span className="price">${item.price}</span>
                  <span className="size">M</span>
                </div>
              </div>

              <div className="cart-qty">
                <input type="number" value={item.qty} readOnly />
              </div>

              <div className="cart-delete">
                <button onClick={() => removeToCart(item.id)}>
                  <i className="bi bi-trash"></i>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      <div className="cart-right">
        <h2 className="totals-title">
          CART TOTALS <span className="line"></span>
        </h2>

        <div className="totals-box">
          <div className="row">
            <span>Subtotal</span>
            <span>$ 0.00</span>
          </div>

          <div className="row">
            <span>Shipping Fee</span>
            <span>$ 10.00</span>
          </div>

          <div className="row total">
            <span>Total</span>
            <span>$ 0.00</span>
          </div>
        </div>

        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}
