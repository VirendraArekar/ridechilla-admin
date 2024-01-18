import React, { Suspense, Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loader from "../Layout/Loader";
import LayoutRoutes from "./LayoutRoutes";
import PrivateRoute from "./PrivateRoute";
import { authRoutes } from "./AuthRoutes";
import SignIn from "../Auth/Signin";

const Routers = () => {
  const login = localStorage.getItem("login");
  return (
    <Fragment>
      <BrowserRouter basename="/">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={"/"} element={<PrivateRoute />}>
              {login === true ? (
                <>
                  <Route exact path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
                  <Route exact path={`/`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
                </>
              ) : (
                <>
                  <Route exact path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/login`} />} />
                </>
              )}
              <Route path={`/*`} element={<LayoutRoutes />} />
            </Route>

            <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<SignIn />} />
            {authRoutes.map(({ path, Component }, i) => (
              <Route path={path} element={Component} key={i} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};
export default Routers;
