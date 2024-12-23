import { FC } from "react";
import { Recipe } from "../../types/bean";
import { Link } from "react-router-dom";
import styled from "./RecipeCard.module.css"


interface Props {
    data: Recipe
}

const RecipeCard: FC<Props> = ({data}) => {
  return (
    <div className={styled.container}>
      <h2 className={styled.h3}>{data.name}</h2>
      <p className={styled.p}>{data.description}</p>
      <p className={styled.p}>{data.makingAmount}</p>
      <p className={styled.p}>{data.totalTime}</p>
      <Link to = {`/Jelly-Belly/recipties/recipe/${data.recipeId}`} className={styled.link}>check out this recipe</Link>
    </div>
  );
};

export default RecipeCard;
