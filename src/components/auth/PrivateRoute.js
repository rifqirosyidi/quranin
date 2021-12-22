import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { useSafeLocalStorage } from "../../hooks/useSafeLocalStorage";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [user] = useSafeLocalStorage("user", undefined);
  if (!user && location.pathname !== `/authenticate/login`) {
    navigate("/authenticate/login");
    return null;
  }
  return <Component {...rest} />;
};

export default PrivateRoute;
