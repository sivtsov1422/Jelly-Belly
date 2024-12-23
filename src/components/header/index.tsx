import Logo from "../Logo/Logo";
import Nav from "../Nav";
import style from "./style.module.css"

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
