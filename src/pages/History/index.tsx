import { useEffect, useState } from "react";
import { HistoryFact } from "../../types/bean";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import styled from "./History.module.css"

const History = () => {
  const [allHistory, setAllHistory] = useState<null | HistoryFact[]>(null);
  const getHistory = async () => {
    try {
      const req = await fetch(
        "https://jellybellywikiapi.onrender.com/api/mileStones"
      );
      const data = await req.json();
      setAllHistory(data.items);
    } catch (error) {
      console.log("ERROR->", error);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);
  return (
    <div className={styled.container}>
      {allHistory && allHistory.map((fact)=> (
        <HistoryCard data={fact} />
      ))}
    </div>
  );
};
export default History;
