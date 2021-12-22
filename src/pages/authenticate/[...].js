import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import Login from "../../components/auth/login";
import Register from "../../components/auth/register";
import Profile from "../../components/auth/profile";
import Settings from "../../components/auth/settings";
import PrivateRoute from "../../components/auth/PrivateRoute";

const Authenticate = () => {
  return (
    <Router basepath="/authenticate">
      <Login path="/login" />
      <Register path="/register" />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/settings" component={Settings} />
    </Router>
  );
};

export default Authenticate;
