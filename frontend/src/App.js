import { Route, Router, Routes, useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Home from "./containers/Home";
import { loggedInUser } from "./utils/fetchUser";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = loggedInUser();
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
