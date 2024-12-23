import { Link } from "react-router-dom";
import styled from "./SiteMap.module.css"
const SiteMap = () => {
  return (
    <div className={styled.container}>
      <h3 className={styled.h3}>Site Map</h3>
      <div className={styled.links}>
        <a href="">About Jelly Belly Wiki</a>
        <Link to="/Jelly-Belly" className={styled.link}>Beans</Link>
        <Link to="/facts" className={styled.link}>Facts</Link>
        <Link to="/recipties" className={styled.link}>Recipties</Link>
        <Link to="/combinations" className={styled.link}>Combinations</Link>
        <Link to="/history" className={styled.link}>History</Link>
        <Link to="/about" className={styled.link}>About</Link>
        <Link to="/review" className={styled.link}>Review</Link>
      </div>
    </div>
  );
};
export default SiteMap;
