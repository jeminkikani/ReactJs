import React, { useState } from "react";
import Sres from "./Sres";

const Search = () => {
  const [img, setImg] = useState();
  const inputEvent = (Event) => {
    const data = Event.target.value;
    setImg(data);
  };

  return (
    <>
    <div className="searchbar">

      <input
        type="text"
        placeholder="anything"
        value={img}
        onChange={inputEvent}
      />
      {img === "" ? null : <Sres name={img} />}
    </div>
    
    </>
  );
};

export default Search;

