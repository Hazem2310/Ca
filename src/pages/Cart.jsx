import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, total } = useCart();

  return (
    <>
      <Navbar />
      <section className="page">
        <h1>سلة الطلبات</h1>
        {cart.length === 0 ? (
          <div className="empty-cart"><p>السلة فارغة</p><Link to="/menu" className="primary-btn">العودة للمنيو</Link></div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.ar} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} />
                  <div className="cart-info"><h3>{item.ar}</h3><p>{item.he}</p><strong>{item.price}₪</strong></div>
                  <div className="qty-box"><button onClick={() => decreaseQuantity(item.id)}>-</button><span>{item.quantity}</span><button onClick={() => addToCart(item)}>+</button></div>
                  <button className="delete-btn" onClick={() => removeFromCart(item.id)}>حذف</button>
                </div>
              ))}
            </div>
            <div className="cart-total"><h2>المجموع: {total}₪</h2><Link to="/checkout" className="primary-btn">إتمام الطلب</Link></div>
          </>
        )}
      </section>
    </>
  );
}

export default Cart;
