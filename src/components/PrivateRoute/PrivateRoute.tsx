import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

interface IPropsType {
  children: JSX.Element;
}

const PrivateRoute: React.FC<IPropsType> = (props) => {
  const { children } = props;
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/" replace={true} />;
};

export default PrivateRoute;
