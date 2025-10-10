import React, { useState } from "react";

const InputMulti = () => {
  let [name, setName] = useState({ firstName: "", lastName: "" });
  function handleFirstName(e) {
    setName({ ...name, firstName: e.target.value });
  }
  function handleSecondName(e) {
    setName({ ...name, lastName: e.target.value });
  }
  return (
    <div>
      <input
        onChange={handleFirstName}
        type="text"
        placeholder="First name"
        value={name.firstName}
      />
      <input
        onChange={handleSecondName}
        type="text"
        placeholder="Second name"
        value={name.lastName}
      />
      <h3>
        {name.firstName}-{name.lastName}
      </h3>
    </div>
  );
};

export default InputMulti;
