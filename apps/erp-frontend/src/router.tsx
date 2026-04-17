// src/router.tsx
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { OrdersIndexPage } from "./routes/orders/OrdersIndexPage";

export function AppRouter() {
  return (

  <Routes>
    <Route path="/" element={<Dashboard />} />
    {/* <Route path="/inventory" element={<Inventory />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/shipments" element={<Shipments />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="/admin" element={<Admin />} /> */}
    <Route  path="/orders" element={<OrdersIndexPage />} />
    <Route  path="*" element={<div>Page not found</div>} />
  </Routes>
// </BrowserRouter>

  );
}
