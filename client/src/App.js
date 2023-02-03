// import "bulma/css/bulma.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// general area
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landingpage from "./pages/Landingpage";

// users area
import Dashboard from "./pages/users/Dashboard";
import Default from "./pages/users/Default";
import History from "./pages/users/History";
import Payment from "./pages/users/Payment";
import Purchase from "./pages/users/Purchase";
import Setting from "./pages/users/Setting";

// Admin area
import Layout_admin from "./pages/admin/Layout_admin";
import Admin_dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Customers from "./pages/admin/Customers";
import Transaction from "./pages/admin/Transaction";
import Messages from "./pages/admin/Messages";
import Addproducts from "./pages/admin/Addproduct";

function App() {
  return (
    <Routes>
      {/* general area*/}
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Landingpage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Default />} />
          <Route path="pengaturan" element={<Setting />} />
          <Route path="pembelian" element={<Purchase />} />
          <Route path="pembayaran" element={<Payment />} />
          <Route path="riwayat_pembelian" element={<History />} />
        </Route>
      </Route>

      {/* Admin area */}
      <Route path="/admin" element={<Layout_admin />}>
        <Route index element={<Admin_dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="Messages" element={<Messages />} />
        <Route path="Addproducts" element={<Addproducts />} />
      </Route>
    </Routes>
  );
}

export default App;
