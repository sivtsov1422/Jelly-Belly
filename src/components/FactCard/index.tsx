import { FC } from "react";
import { Fact } from "../../types/bean";
import styled from "./FactCard.module.css"

interface Props {
    data: Fact
}

const FactCard: FC<Props> = ({data}) => {
    return (
        <div className={styled.container}>
            <h2 className={styled.title}>{data.title}</h2>
            <p className={styled.description}>{data.description}</p>
        </div>
    )
}

export default FactCard;