import { FC } from "react";
import { Comb } from "../../types/bean";
import styled from "./CombCard.module.css"
interface Props {
  data: Comb;
}

const CombCard: FC<Props> = ({ data }) => {
  return (
    <div className={styled.container}>
        <h2>{data.name}</h2>
        <p>{data.tag[0]}</p>
    </div>
  );
};

export default CombCard
