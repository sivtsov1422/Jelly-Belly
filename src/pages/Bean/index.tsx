import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bean } from "../../types/bean";
import styled from "./Bean.module.css";

const BeanPage = () => {
  const params = useParams();
  const [beanData, setBeanData] = useState<Bean | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
        );
        const data = await req.json();
        setBeanData(data);
      } catch (e) {
        console.log("Error->", e);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div>
        {beanData && (
          <>
            <div className={styled.container}>
              <h1>{beanData.flavorName}</h1>
              <p>{beanData.description}</p>
              <img className={styled.img} src={beanData.imageUrl} alt="" />
              <p>Group Name: {beanData.groupName}</p>
              <p>
                Ingredients:
                <br />
                {beanData.ingredients}
              </p>
              <div className={styled.setContainer}>
                <p>Hexadecimal Color: {beanData.backgroundColor}</p>
                <p>Kosher: {beanData.kosher}</p>
                <p>Seasonal: {beanData.seasonal}</p>
                <p>Gluten Free: {beanData.glutenFree}</p>
                <p>Sugar Free: {beanData.sugarFree}</p>
                <p>Color Group: {beanData.colorGroup}</p>
              </div>
              <Link to="/Jelly-Belly" className={styled.link}>Back to Beans →</Link>
            </div>

          </>
        )}
      </div>
    </>
  );
};
export default BeanPage;
