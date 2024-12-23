import { Link } from "react-router-dom";
import styled from "./SiteMap.module.css"
const SiteMap = () => {
  return (
    <div className={styled.container}>
      <h3 className={styled.h3}>Site Map</h3>
      <div className={styled.links}>
        <a href="">About Jelly Belly Wiki</a>
        <Link to="/Jelly-Belly/beans" className={styled.link}>Beans</Link>
        <Link to="/Jelly-Belly/facts" className={styled.link}>Facts</Link>
        <Link to="/Jelly-Belly/recipties" className={styled.link}>Recipties</Link>
        <Link to="/Jelly-Belly/combinations" className={styled.link}>Combinations</Link>
        <Link to="/Jelly-Belly/history" className={styled.link}>History</Link>
        <Link to="/Jelly-Belly/about" className={styled.link}>About</Link>
        <Link to="/Jelly-Belly/review" className={styled.link}>Review</Link>
      </div>
    </div>
  );
};
export default SiteMap;
