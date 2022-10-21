import React from "react";
import { Locations } from "./Pages/Locations";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { PrivatePage } from "./Pages/PrivatePage";
import { NotFound } from "./Pages/NotFound";

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
      >
        <Route
          path="locations"
          element={
            <PrivatePage>
              <Locations />
            </PrivatePage>
          }
        ></Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
