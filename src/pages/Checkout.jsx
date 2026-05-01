import { useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { saveOrder } from "../utilsStorage";

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({ customerName: "", phone: "", address: "", paymentMethod: "cash", notes: "" });
  const [result, setResult] = useState(null);
  const bitPhone = "0540000000";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitOrder = () => {
    if (!form.customerName || !form.phone || !form.address) return alert("عبّي الاسم، الهاتف، والعنوان");
    if (cart.length === 0) return alert("السلة فارغة");
    const order = saveOrder({ ...form, items: cart, total, bitPhone });
    setResult(order);
    clearCart();
  };

  return (
    <>
      <Navbar />
      <section className="page">
        <h1>إتمام الطلب</h1>
        {!result ? (
          <div className="checkout-layout">
            <div className="checkout-box">
              <input name="customerName" placeholder="الاسم الكامل" value={form.customerName} onChange={handleChange} />
              <input name="phone" placeholder="رقم الهاتف" value={form.phone} onChange={handleChange} />
              <textarea name="address" placeholder="العنوان" value={form.address} onChange={handleChange} />
              <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
                <option value="cash">نقدًا عند الاستلام</option>
                <option value="bit">الدفع عبر Bit</option>
              </select>
              <textarea name="notes" placeholder="ملاحظات للطلب" value={form.notes} onChange={handleChange} />
              <button onClick={submitOrder}>تأكيد الطلب</button>
            </div>
            <div className="summary-box"><h2>ملخص الطلب</h2>{cart.map((item) => <p key={item.id}>{item.ar} × {item.quantity}</p>)}<h3>المجموع: {total}₪</h3></div>
          </div>
        ) : (
          <div className="success-box">
            <h2>تم إرسال الطلب بنجاح</h2><p>رقم الطلب: #{result.id}</p><p>المبلغ: {result.total}₪</p>
            {result.paymentMethod === "bit" ? <div className="bit-payment"><h3>الدفع عبر Bit</h3><p>ادفع على الرقم:</p><strong>{result.bitPhone}</strong><p>اكتب في ملاحظة الدفع: طلب رقم {result.id}</p><p>حالة الدفع: بانتظار تأكيد الإدارة</p></div> : <p>طريقة الدفع: نقدًا عند الاستلام</p>}
          </div>
        )}
      </section>
    </>
  );
}

export default Checkout;
