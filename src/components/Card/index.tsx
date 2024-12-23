import { FC } from "react";
import style from "./style.module.css";
import { Bean } from "../../types/bean";
import { Link } from "react-router-dom";


// type Props = {
//   title: string;
// };

interface Props {
  data: Bean
}

const Card: FC<Props> = ({data}) => {
  return (

    <Link to = {`/Jelly-Belly/bean/${data.beanId}`} className={style.card}>
        <h2>{data.flavorName}</h2>
        <img src= {data.imageUrl} alt="" className={style.img}/>
        <p>{data.description}</p>
        {data.sugarFree === true ? <p className={style.noS}>No Sugar</p> : <p className={style.sugar}> With Sugar</p>}
    </Link>

  );
};

export default Card;
