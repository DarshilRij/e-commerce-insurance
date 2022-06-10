import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import UserInfo from "../Pages/UserInfo/Form";

const Router: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<UserInfo />}>
        <Route path=":userId" element={<UserInfo />} />
      </Route>
      {/* <Route path="invoices" element={<Invoices />} /> */}

      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Ahh! No page exists</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Router;
