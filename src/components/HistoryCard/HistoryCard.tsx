import { FC } from "react";
import { HistoryFact } from "../../types/bean";
import styled from "./HistoryCard.module.css"

interface Props {
  data: HistoryFact;
}

const HistoryCard: FC<Props> = ({data}) => {
  return (
    <div className={styled.container}>
      <h2>{data.year}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default HistoryCard;
