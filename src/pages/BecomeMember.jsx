import React, { useEffect } from "react";
import imageHome from "../IMG/ping.png";
import JumbotronChange from "../services/jumbotronChange";

const BecomeMember = (props) => {
  useEffect(() => {
    JumbotronChange.changeText("S'inscrire au club TT Sauvenière");
    JumbotronChange.changeImage(imageHome);
  }, []);
  return (
    <>
      Elit veniam incididunt ipsum ipsum pariatur ad ipsum labore nisi duis
      culpa laborum. Do consectetur ut culpa dolore anim excepteur sunt eu.
      Nostrud labore magna duis qui dolore est laboris et mollit ut ex aute. In
      adipisicing est ea nulla magna consectetur ex dolor dolore dolor. Ullamco
      occaecat et mollit aute adipisicing nisi officia consectetur nisi
      exercitation exercitation duis. Quis laborum reprehenderit duis deserunt
      et nulla quis anim ea consectetur. Esse adipisicing eu aliqua magna
      deserunt elit aliquip incididunt cupidatat nostrud do sint. Anim cupidatat
      ullamco consequat aliqua minim tempor dolore ullamco et laboris
      reprehenderit ex quis. Culpa magna magna irure nostrud. Cupidatat
      adipisicing aute labore tempor laborum. Amet magna aliqua qui sit
      incididunt irure nostrud consectetur culpa fugiat. Nostrud voluptate
      excepteur sunt ut voluptate consectetur esse sit. Ea culpa qui nostrud
      esse esse nostrud. Sint ad eu cillum culpa velit cupidatat qui adipisicing
      sint qui. Deserunt qui Lorem amet sint proident id cupidatat qui Lorem
      voluptate non Lorem. Laborum aute nisi ipsum fugiat elit commodo mollit
      tempor nulla voluptate sunt nostrud esse. Dolor aliqua id in mollit do.
      Occaecat culpa est ex in nulla mollit anim et reprehenderit nostrud. Velit
      tempor incididunt minim dolore eiusmod voluptate. Mollit ipsum do enim
      veniam exercitation. Laboris dolore commodo nisi Lorem laboris deserunt
      mollit laboris exercitation. Aute ea duis consequat ea. Do veniam
      excepteur adipisicing reprehenderit dolore laboris sunt. Ipsum duis
      consequat elit veniam Lorem non proident nostrud ut. Voluptate aliquip
      enim magna consequat aute eu quis ex minim.
    </>
  );
};

export default BecomeMember;
