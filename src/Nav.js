import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </div>
  );
}

export default Nav;
