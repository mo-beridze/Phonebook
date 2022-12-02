import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selector";

export default function PublicRoute({ restricted = true }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return !shouldRedirect ? <Outlet /> : <Navigate to="/contacts" />;
}
