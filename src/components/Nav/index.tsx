import { Link } from "react-router-dom";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css"

const Nav = () => {
  return (
    <nav className={style.nav}>
        <Link to="/Jelly-Belly">Beans</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/recipties">Recipties</Link>
        <Link to="/combinations">Combinations</Link>
        <Link to="/history">History</Link>
        <Link to="/about">About</Link>
        <Link to="/review">Review</Link>
        <SwitchTheme />
    </nav>
  );
};

export default Nav;
