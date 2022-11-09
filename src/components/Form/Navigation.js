import authSelectors from "../redux/auth/auth-selector";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
