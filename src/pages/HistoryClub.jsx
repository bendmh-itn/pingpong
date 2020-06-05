import React, { useEffect } from "react";
import JumbotronChange from "../services/jumbotronChange";
import imageHome from "../IMG/ping.png";

const HistoryClub = (props) => {
  useEffect(() => {
    JumbotronChange.changeText(
      "<h1 class='h1Jumbotron'>L'histoire du club de Sauvenière</h1>"
    );
    JumbotronChange.changeImage(imageHome);
  }, []);
  return (
    <>
      <p>
        Officia pariatur elit exercitation incididunt non. Excepteur duis
        consequat laborum adipisicing ipsum veniam nisi. Sint culpa ullamco
        proident dolor tempor sit ullamco dolor id. Veniam veniam nulla proident
        reprehenderit ea. Non commodo dolor aute in tempor elit pariatur. Et
        tempor enim laborum duis duis velit consequat laboris. Laborum ipsum id
        sit cillum mollit occaecat laborum dolore fugiat laboris est.
        Exercitation consectetur sit enim in sunt. Tempor exercitation proident
        sunt culpa. Do adipisicing veniam incididunt sit. Laborum quis occaecat
        duis cupidatat nulla in cillum aliqua do ea anim nisi. Commodo elit
        labore reprehenderit anim ea aute amet. Ut nulla aute officia sint duis
        eiusmod ullamco nulla et. Dolore labore cillum proident nostrud
        consequat incididunt commodo ad ea aute. Voluptate incididunt sunt duis
        anim anim minim pariatur id consectetur consequat incididunt. Anim
        fugiat ut do eiusmod laborum labore adipisicing fugiat dolore aliquip
        culpa duis. Aliquip elit ullamco ex ullamco. Esse duis eiusmod ullamco
        sit veniam est reprehenderit ex. Et anim eiusmod eiusmod adipisicing
        esse. Sunt amet mollit ex labore mollit amet veniam officia
        reprehenderit anim voluptate. Lorem cupidatat duis elit elit ullamco sit
        occaecat pariatur aliqua sunt laboris nostrud fugiat. Excepteur
        excepteur pariatur eu ipsum eiusmod sunt anim. Consectetur fugiat sit
        cupidatat voluptate velit sit non ad non do enim culpa cillum
        reprehenderit. Exercitation eu minim fugiat nulla labore aliqua
        voluptate qui. Non labore aliqua adipisicing reprehenderit est proident
        do. Fugiat aute velit ipsum ad do commodo eiusmod. Sunt nostrud tempor
        nostrud irure. Exercitation quis id eu cillum dolor fugiat labore. Est
        ex aliquip incididunt adipisicing est magna et eu et exercitation. Elit
        eu velit deserunt enim laboris non reprehenderit mollit est duis
        voluptate laborum mollit fugiat. Est Lorem eu proident tempor non
        laboris sit deserunt mollit est. Irure nisi pariatur officia cillum
        excepteur ad. Labore Lorem Lorem amet nulla veniam. Ipsum adipisicing
        minim esse duis tempor dolore minim nulla adipisicing nisi esse. Ut ex
        dolore et cillum adipisicing mollit voluptate ea eu nostrud officia id
        nulla labore.
      </p>
    </>
  );
};

export default HistoryClub;
