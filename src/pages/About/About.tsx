import me from "../../imgs/me.jpg";
import styled from "./About.module.css";

const About = () => {
  return (
    <div className={styled.container}>
      <h1>О чем писать?</h1>
      <p>
        Мне не пришло в голову, что изобразить на этой странице, поэтому вот -
        Я:
      </p>
      <img src={me} alt="" className={styled.img} />
      <div className={styled.meContainer}>
        <div>
          <h3>Возраст: </h3>
          <p>21</p>
        </div>
        <div>
          <h3>Рост: </h3>
          <p>180</p>
        </div>
        <div>
          <h3>Образование: </h3>
          <p>Повар</p>
        </div>
        <div>
          <h3>Профессия:</h3>
          <p>Frontend Developer</p>
        </div>
        <div>
          <h3>Город:</h3>
          <p>Белгород</p>
        </div>
        <div>
          <h3>Хобби:</h3>
          <p>Бильярд</p>
        </div>
      </div>
    </div>
  );
};
export default About;
