import React, { useEffect } from "react";
import MyDocument from "../components/MyDocument";
import JumbotronChange from "../services/jumbotronChange";

const Member = (props) => {
  useEffect(() => {
    JumbotronChange.changeText(
      "<h1 class='h1Jumbotron'>Liste de force du TT Sauvenière</h1>"
    );
  }, []);

  return (
    <>
      <MyDocument
        src="https://drive.google.com/file/d/1Ulbk5DjZgmQ_stbusrZolzDGmF2BmArD/preview"
        width="800"
        height="500"
      />
    </>
  );
};

export default Member;
