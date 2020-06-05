import React from "react";
import Jumbotron from "../components/Jumbotron";
import MyDocument from "../components/MyDocument";

const Member = (props) => {
  return (
    <>
      <Jumbotron text="Devenir membre du club" />

      <MyDocument />
    </>
  );
};

export default Member;
