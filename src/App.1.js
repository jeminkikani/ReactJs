import React, { useState } from "react";

// import Card from "./Card";
// import SData from "./Sdata";
export function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const change = (Event) => {
    console.log(Event.target.value, "👍");
    setFullName(Event.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    alert(fullName);
  };
  return (
    <>
      <form onSubmit={onsubmit}>
        <h1 className="headingStyle">
          Hello {fullName.fname} {fullName.lname}
        </h1>
        <div className="new">
          <input
            type="text"
            name="fname"
            placeholder="Enter Your Name"
            onChange={change}
            value={fullName.fname}
          />
          <br />
          <br />
          <input
            type="text"
            name="lname"
            placeholder="Enter Your Last Name"
            onChange={change}
            value={fullName.lname}
          />
          <br /> <br />
          <button type="submit">Click Me</button>
        </div>
      </form>
    </>
  );
}
