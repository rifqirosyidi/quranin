import React from "react";
import { Router } from "@reach/router";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

const Index = () => (
  <Router basepath="/app">
    <Login path="/login" />
    <Register path="/register" />
  </Router>
);
export default Index;
