import styled from "./DataAcc.module.css"

const DataAcc = () => {
  return (
    <div className={styled.container}>
      <h3 className={styled.h3}>Data Accuracy</h3>
      <p className={styled.p}>
        Despite efforts to ensure accuracy, this resource may contain errors or
        inaccuracies and should not be the sole basis for critical decisions,
        especially those related to health.
      </p>
    </div>
  );
};
export default DataAcc;
