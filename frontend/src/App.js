import { Routes, Route, useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import Home from "./containers/Home";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
