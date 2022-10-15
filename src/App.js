import React from "react";
import { Locations } from "./Pages/Locations";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { PrivatePage } from "./Pages/PrivatePage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivatePage>
            <Locations />
          </PrivatePage>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
