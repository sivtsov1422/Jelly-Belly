import logo from "../../../imgs/logo.png";
import styled from "./FootLogo.module.css"
const FootLogo = () => {
  return (
    <div className={styled.container}>
      <img src={logo} alt="" className={styled.logo}/>
      <p className={styled.p}>
        All data in this application and its API are sourced from the official
        Jelly Belly website. None of the content here is claimed as original;
        it's all credited to and derived from Jelly Belly's official resources.
      </p>
    </div>
  );
};

export default FootLogo;
