import { Link } from "react-router-dom";
import logo_img from "../../imgs/logo.png"
import style from "./style.module.css"

const Logo = () => {
  return (
    <Link to = '/Jelly-Belly' className={style.logo}>
      <img src={logo_img} alt="logo" />
      <p>Jelly Belly</p>
    </Link>
  );
};

export default Logo;
