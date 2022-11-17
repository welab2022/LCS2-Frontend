import React from "react";
import { Locations } from "./Pages/Locations";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { PrivatePage } from "./Pages/PrivatePage";
import { NotFound } from "./Pages/NotFound";
import { Users } from "./Pages/Users";
import { ChangePassword } from "./Pages/ChangePassword";
import { AddUser } from "./Pages/AddUser";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivatePage>
            <Users />
          </PrivatePage>
        }
      ></Route>
      <Route
        path="locations"
        element={
          <PrivatePage>
            <Locations />
          </PrivatePage>
        }
      />
      <Route
        path="users"
        element={
          <PrivatePage>
            <Users />
          </PrivatePage>
        }
      />
      <Route
        path="users/add"
        element={
          <PrivatePage>
            <AddUser></AddUser>
          </PrivatePage>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
