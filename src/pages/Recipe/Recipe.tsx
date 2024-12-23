import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "../../types/bean";
import styled from "./Recipe.module.css";

const RecipePage = () => {
  const params = useParams();
  const [recipeData, setRecipeData] = useState<null | Recipe>(null);
  useEffect(() => {
    const getRecipe = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/recipes/${params.id}`
        );
        const data = await req.json();
        setRecipeData(data);
      } catch (error) {
        console.log("ERROR->", error);
      }
    };
    getRecipe();
  }, []);
  return (
    <>
      <div>
        {recipeData && (
          <div className={styled.container}>
            <div className={styled.start}>
              <h2>{recipeData.name}</h2>
              <p>{recipeData.description}</p>
              <p>Preparation time: {recipeData.prepTime}</p>
              <p>Cook time: {recipeData.cookTime}</p>
              <p>Total time: {recipeData.totalTime}</p>
              <p>Recipe makes {recipeData.makingAmount}</p>
            </div>
            <img src={recipeData.imageUrl} alt="" className={styled.img} />
            <h3>Ingredients</h3>
            <div className={styled.ingredients}>
              <p>{recipeData.ingredients[0]}</p>
              <p>{recipeData.ingredients[1]}</p>
              <p>{recipeData.ingredients[2]}</p>
              <p>{recipeData.ingredients[3]}</p>
              <p>{recipeData.ingredients[4]}</p>
              <p>{recipeData.ingredients[5]}</p>
              <p>{recipeData.ingredients[6]}</p>
              <p>{recipeData.ingredients[7]}</p>
              <p>{recipeData.ingredients[8]}</p>
            </div>

              <h3>{recipeData.additions1[0]}</h3>
              <div className={styled.ingredients}>
                <p>{recipeData.additions1[1]}</p>
                <p>{recipeData.additions1[2]}</p>
                <p>{recipeData.additions1[4]}</p>
                <p>{recipeData.additions1[5]}</p>
                <p>{recipeData.additions1[6]}</p>
                <p>{recipeData.additions1[7]}</p>
                <p>{recipeData.additions1[8]}</p>
                <p>{recipeData.additions1[9]}</p>

            </div>
            <h3>Directions</h3>
            <p>{recipeData.directions}</p>
            <p>{recipeData.tips}</p>
            <Link to="/recipties">Back to recipes →</Link>
          </div>
        )}
      </div>
    </>
  );
};
export default RecipePage;
