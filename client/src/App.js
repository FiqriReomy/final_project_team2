// import "bulma/css/bulma.min.css";
import "./App.css";
import Login from "./sources/Login";
import Register from "./sources/Register";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./sources/components/Dashboard";
import LandingPage from "./sources/components/LandingPages";
import Setting from "./sources/pages/Setting";
import Purchase from "./sources/pages/Purchase";
import History from "./sources/pages/History";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/dashboard/setting" element={<Setting />} />
      <Route exact path="/dashboard/purchase" element={<Purchase />} />
      <Route exact path="/dashboard/History" element={<History />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
