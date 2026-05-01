import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getMenuSections, getOrders, saveMenuSections, updateOrder, resetMenuSections } from "../utilsStorage";

function Admin() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("orders");
  const [orders, setOrders] = useState([]);
  const [sections, setSections] = useState([]);

  const load = () => {
    setOrders(getOrders());
    setSections(getMenuSections());
  };

  useEffect(() => { load(); }, []);

  const logout = () => {
    localStorage.removeItem("casablanca_is_admin");
    navigate("/");
  };

  const markPaid = (id) => {
    updateOrder(id, { paymentStatus: "paid" });
    load();
  };

  const changeItem = (sectionId, itemId, field, value) => {
    const updated = sections.map((section) => section.id !== sectionId ? section : {
      ...section,
      items: section.items.map((item) => item.id !== itemId ? item : { ...item, [field]: field === "price" ? Number(value) : value })
    });
    setSections(updated);
    saveMenuSections(updated);
  };

  const addItem = (sectionId) => {
    const updated = sections.map((section) => {
      if (section.id !== sectionId) return section;
      const maxId = Math.max(...sections.flatMap((s) => s.items.map((i) => i.id)), 0) + 1;
      return { ...section, items: [...section.items, { id: maxId, ar: "منتج جديد", he: "מוצר חדש", price: 0, image: "/images/placeholder.jpg" }] };
    });
    setSections(updated);
    saveMenuSections(updated);
  };

  const deleteItem = (sectionId, itemId) => {
    const updated = sections.map((section) => section.id !== sectionId ? section : { ...section, items: section.items.filter((item) => item.id !== itemId) });
    setSections(updated);
    saveMenuSections(updated);
  };

  const resetMenu = () => {
    resetMenuSections();
    load();
  };

  return (
    <>
      <Navbar />
      <section className="page admin-page">
        <div className="admin-head"><div><p className="section-small">CASABLANCA CONTROL</p><h1>لوحة الإدارة</h1></div><button className="delete-btn" onClick={logout}>خروج</button></div>
        <div className="admin-tabs"><button className={tab === "orders" ? "active" : ""} onClick={() => setTab("orders")}>الطلبات</button><button className={tab === "menu" ? "active" : ""} onClick={() => setTab("menu")}>تعديل المنيو والصور</button></div>

        {tab === "orders" && (
          <>
            <div className="admin-grid"><div><h3>عدد الطلبات</h3><p>{orders.length}</p></div><div><h3>طلبات Bit</h3><p>{orders.filter((x) => x.paymentMethod === "bit").length}</p></div><div><h3>نقدي</h3><p>{orders.filter((x) => x.paymentMethod === "cash").length}</p></div></div>
            <div className="orders-list">
              {orders.map((order) => (
                <div className="order-card" key={order.id}>
                  <h3>طلب #{order.id}</h3><p>{order.createdAt}</p><p>الاسم: {order.customerName}</p><p>الهاتف: {order.phone}</p><p>العنوان: {order.address}</p><p>الدفع: {order.paymentMethod}</p><p>حالة الدفع: {order.paymentStatus}</p><strong>{order.total}₪</strong>
                  <div className="order-items">{order.items.map((item) => <span key={item.id}>{item.ar} × {item.quantity}</span>)}</div>
                  {order.paymentMethod === "bit" && order.paymentStatus !== "paid" && <button onClick={() => markPaid(order.id)}>تأكيد دفع Bit</button>}
                </div>
              ))}
              {orders.length === 0 && <div className="empty-cart">لا توجد طلبات بعد</div>}
            </div>
          </>
        )}

        {tab === "menu" && (
          <div className="admin-menu-editor">
            <div className="editor-note"><strong>تغيير الصور:</strong> ضع الصورة داخل <code>public/images</code> ثم اكتب المسار مثل <code>/images/kebab.jpg</code>. تقدر كمان تستخدم رابط صورة مباشر https.</div>
            <button onClick={resetMenu} className="delete-btn">إرجاع المنيو الأصلي</button>
            {sections.map((section) => (
              <div className="editor-section" key={section.id}>
                <h2>{section.titleAr} | {section.titleHe}</h2><button onClick={() => addItem(section.id)}>إضافة منتج</button>
                {section.items.map((item) => (
                  <div className="editor-row" key={item.id}>
                    <img src={item.image} alt={item.ar} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} />
                    <input value={item.ar} onChange={(e) => changeItem(section.id, item.id, "ar", e.target.value)} placeholder="اسم عربي" />
                    <input value={item.he} onChange={(e) => changeItem(section.id, item.id, "he", e.target.value)} placeholder="שם עברית" />
                    <input type="number" value={item.price} onChange={(e) => changeItem(section.id, item.id, "price", e.target.value)} placeholder="السعر" />
                    <input value={item.image} onChange={(e) => changeItem(section.id, item.id, "image", e.target.value)} placeholder="/images/example.jpg" />
                    <button className="delete-btn" onClick={() => deleteItem(section.id, item.id)}>حذف</button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Admin;
