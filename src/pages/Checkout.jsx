import { useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const API_URL = "/api/checkout";

function Checkout() {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    address: "",
    payment_method: "Bit",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const submitOrder = async (e) => {
    e.preventDefault();

    if (!cart.length) {
      alert("السلة فارغة");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          total,
          items: cart,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("تم إرسال الطلب بنجاح");

        clearCart();

        setForm({
          customer_name: "",
          phone: "",
          address: "",
          payment_method: "Bit",
          notes: "",
        });
      } else {
        alert("فشل إرسال الطلب");
      }
    } catch (err) {
      console.error(err);
      alert("صار خطأ أثناء إرسال الطلب");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <main className="checkout-page">
        <div className="checkout-card">
          <h1>إتمام الطلب</h1>
          <p>الدفع نقدًا أو عبر Bit</p>

          <form onSubmit={submitOrder}>
            <input
              type="text"
              placeholder="الاسم"
              value={form.customer_name}
              onChange={(e) =>
                setForm({ ...form, customer_name: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="رقم الهاتف"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="العنوان"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
              required
            />

            <select
              value={form.payment_method}
              onChange={(e) =>
                setForm({ ...form, payment_method: e.target.value })
              }
            >
              <option value="Bit">Bit</option>
              <option value="Cash">Cash</option>
            </select>

            <textarea
              placeholder="ملاحظات"
              rows="4"
              value={form.notes}
              onChange={(e) =>
                setForm({ ...form, notes: e.target.value })
              }
            />

            <button type="submit" disabled={loading}>
              {loading ? "جاري الإرسال..." : `تأكيد الطلب • ${total}₪`}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Checkout;