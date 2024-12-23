import { useContext } from "react";
import { ThemeContext } from "../../App";
import style from "./style.module.css"

const SwitchTheme = () => {
  const currentTheme = useContext(ThemeContext);
  console.log("currentTheme: ", currentTheme);

  const handleClick = ()=>{
    if(currentTheme?.theme === "dark"){
        currentTheme.setTheme("light");
    } else {
        currentTheme?.setTheme("dark");
    }
  }

  return <div className={style.btn} onClick={handleClick}>{currentTheme?.theme}</div>;
};
export default SwitchTheme;
