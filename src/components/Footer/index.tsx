import CheckOut from "./CheckOut";
import DataAcc from "./DataAcc";
import FootLogo from "./FootLogo";
import styled from "./Footer.module.css"
import SiteMap from "./SiteMap/SiteMap";
const Footer = () => {
  return (
    <footer className={styled.container}>
      <FootLogo />
      <SiteMap />
      <DataAcc />
      <CheckOut />
    </footer>
  );
};
export default Footer;
