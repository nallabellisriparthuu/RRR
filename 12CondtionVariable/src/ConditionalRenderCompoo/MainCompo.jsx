import React from "react";
import Vote from "./Vote";
import NotVote from "./NoVote";

const MainCompo = () => {
  let age = 2;
  if (age >= 18) {
    return <Vote />;
  } else {
    return <NotVote />;
  }
};

export default MainCompo;
