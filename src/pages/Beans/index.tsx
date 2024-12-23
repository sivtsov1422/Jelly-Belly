import { useState } from "react";
import Cards from "../../components/Cards";
import Search from "../../components/Search";
import styled from "./Beans.module.css"

const Beans = () => {
    const [filterValue, setFilterValue] = useState("");
  return (
    <div className={styled.container}>
      <Search setFilterValue={setFilterValue}/>
      <Cards filterValue={filterValue} />
    </div>
  );
};
export default Beans;
