import React from "react";
import Basketball from "./images/basketball.png";

const Navbar = () => {
  const onClickHandler = () => {};

  return (
    <section className="navbar">
      <div className="navbar-left">
        <img
          src={Basketball}
          alt="basketball"
          className="basketball"
          width="20px"
          height="20px"
        />
        <form>
          <input></input>
        </form>
      </div>
      <div className="navbar-middle">
        <button>Home</button>
        <button onClick={onClickHandler}>People</button>
      </div>
      <div className="navbar-right"></div>
    </section>
  );
};

export default Navbar;
