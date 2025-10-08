import React from "react";

const Button = () => {
  let MyButton = () => {
    alert("Succeesfully submited");
  };
  return (
    <div>
      <button onClick={MyButton}>Click Me</button>
    </div>
  );
};

export default Button;
