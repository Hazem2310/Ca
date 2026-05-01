import { defaultMenuSections } from "./data/siteData";

const MENU_KEY = "casablanca_menu_sections";
const ORDERS_KEY = "casablanca_orders";

export function getMenuSections() {
  const saved = localStorage.getItem(MENU_KEY);
  if (!saved) return defaultMenuSections;
  try {
    return JSON.parse(saved);
  } catch {
    return defaultMenuSections;
  }
}

export function saveMenuSections(sections) {
  localStorage.setItem(MENU_KEY, JSON.stringify(sections));
}

export function resetMenuSections() {
  localStorage.removeItem(MENU_KEY);
}

export function getOrders() {
  const saved = localStorage.getItem(ORDERS_KEY);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  const orders = getOrders();
  const nextOrder = {
    ...order,
    id: Date.now(),
    createdAt: new Date().toLocaleString("he-IL"),
    status: "new",
    paymentStatus: order.paymentMethod === "bit" ? "pending" : "cash_on_delivery"
  };
  localStorage.setItem(ORDERS_KEY, JSON.stringify([nextOrder, ...orders]));
  return nextOrder;
}

export function updateOrder(id, updates) {
  const orders = getOrders().map((order) => order.id === id ? { ...order, ...updates } : order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}
