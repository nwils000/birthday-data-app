import React from "react";
import github from "../Photos/github.png";

export default function Footer() {
  return (
    <>
      <div className="footer">Copyright © 2022</div>
      <a href="https://github.com/nwils000/birthday-data-app">
        <img className="github__logo" src={github} alt="" />
      </a>
    </>
  );
}
