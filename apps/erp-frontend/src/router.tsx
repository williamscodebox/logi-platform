// src/router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

export function AppRouter() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    {/* <Route path="/inventory" element={<Inventory />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/shipments" element={<Shipments />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="/admin" element={<Admin />} /> */}
  </Routes>
</BrowserRouter>

  );
}
