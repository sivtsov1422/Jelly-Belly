import gitHub from "../../../imgs/github.svg"
import discord from "../../../imgs/discord.svg"
import twitter from "../../../imgs/twitter.svg"
import styled from "./CheckOut.module.css"

const CheckOut = () => {
  return (
    <div className={styled.container}>
      <h3>Check Out</h3>
      <div className={styled.svg}>
        <img src={gitHub} alt="" />
        <img src={discord} alt="" />
        <img src={twitter} alt="" />
      </div>
    </div>
  );
};

export default CheckOut;
