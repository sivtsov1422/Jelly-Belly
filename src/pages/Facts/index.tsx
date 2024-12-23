import { useEffect, useState } from "react";
import { Fact } from "../../types/bean";
import FactCard from "../../components/FactCard/index.tsx"
import styled from "./Facts.module.css"

const Facts = () => {
  const [allFacts, setAllFacts] = useState<null | Fact[]>(null);
  const getFacts = async () => {
    try {
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/facts"
      );
      const data = await req.json();
      setAllFacts(data.items);
    } catch (error) {
      console.log("ERROR->", error);
    }
  };
  useEffect(() => {
    getFacts();
  }, []);
  return (
    <div className={styled.container}>
        {allFacts && allFacts.map((fact)=>(
          <FactCard data={fact} key={fact.factId}/>
        ))}
    </div>
  );
};
export default Facts;
