import { useEffect, useState } from "react";
import { Comb } from "../../types/bean";
import CombCard from "../../components/CombCard/CombCard";
import styled from "./Combinations.module.css"

const Combinations = () => {
  const [allComb, setAllComb] = useState<null | Comb[]>(null);
  const getComb = async () => {
    try {
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/combinations"
      );
      const data = await req.json();
      setAllComb(data.items);
    } catch (error) {
      console.log("ERROR->", error);
    }
  };
  useEffect(() => {
    getComb();
  }, []);
  return (
    <div className={styled.container}>{allComb && allComb.map((comb) => <CombCard data={comb} />)}</div>
  );
};
export default Combinations;
