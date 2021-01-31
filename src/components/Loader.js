import React, { Fragment } from "react";
import spinner from "../assets/loader/Eclipse.gif";

const Loader = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Fragment>
  );
};

export default Loader;
