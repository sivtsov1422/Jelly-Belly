import { Link } from "react-router-dom";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css"

const Nav = () => {
  return (
    <nav className={style.nav}>
        <Link to="/Jelly-Belly/beans">Beans</Link>
        <Link to="/Jelly-Belly/facts">Facts</Link>
        <Link to="/Jelly-Belly/recipties">Recipties</Link>
        <Link to="/Jelly-Belly/combinations">Combinations</Link>
        <Link to="/Jelly-Belly/history">History</Link>
        <Link to="/Jelly-Belly/about">About</Link>
        <Link to="/Jelly-Belly/review">Review</Link>
        <SwitchTheme />
    </nav>
  );
};

export default Nav;
