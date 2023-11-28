import React from "react";

const Sres = (props) => {
  const img = `https://picsum.photos/200/300?${props.name}`;
  return (
    <>
      <div className="searchbar">
        <img src={img} alt="Search" />
      </div>
    </>
  );
};

export default Sres;
