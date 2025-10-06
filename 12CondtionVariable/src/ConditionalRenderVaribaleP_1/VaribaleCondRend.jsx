import React from "react";

const VaribaleCondRend = () => {
  let vote = <h1>Eligible to vote</h1>;
  let notVote = <h1>Not eligible to vote</h1>;
  let age = 5;
  if (age >= 18) {
    return vote;
  } else {
    return notVote;
  }
};

export default VaribaleCondRend;
