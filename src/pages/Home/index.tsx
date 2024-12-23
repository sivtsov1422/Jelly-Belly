import styled from "./style.module.css";
import image from "../../imgs/logo.png";
const Home = () => {
  return (
    <>
      <div className={styled.home_container}>
        <img src={image} alt="" className={styled.img} />
        <div className={styled.info}>
          <h1>Welcom to the world of Jelly Belly</h1>
          <p>A rainbow of Flavors Awaits!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
