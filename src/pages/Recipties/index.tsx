import { useEffect, useState } from "react";
import { Recipe } from "../../types/bean";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styled from "./Recipies.module.css"

const Recipies = () => {
  const [allRecipies, setAllRecipies] = useState<null | Recipe[]>(null);
  const getRecipies = async () => {
    try {
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/recipes"
      );
      const data = await req.json();
      console.log(data)
      setAllRecipies(data.items);
    } catch (error) {
      console.log("ERROR->", error);
    }
  };
  useEffect(() => {
    getRecipies();
  }, []);
  return (
    <div className={styled.container}>
      {allRecipies &&
        allRecipies.map((recipe) => (
          <RecipeCard data={recipe} key={recipe.recipeId} />
        ))}
    </div>
  );
};
export default Recipies;
