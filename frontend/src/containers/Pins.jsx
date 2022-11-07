import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CreatePin, PinDetail, Search, Navbar, Feed } from "../components";

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route to="/" element={<Feed />}></Route>
          <Route to="/category/:categoryId" element={<Feed />}></Route>
          <Route
            to="/pin-detail/:pinId"
            element={<PinDetail user={user} />}
          ></Route>
          <Route to="/create-pin" element={<CreatePin user={user} />}></Route>
          <Route
            to="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
