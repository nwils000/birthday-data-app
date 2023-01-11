import React from "react";
import Result from "./Result";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import backButton from "../Photos/backButton.png";

export default function Results() {
  const location = useLocation();
  let results = location.state.results;

  return (
    <>
      <Link to="/">
        <img className="back-button" src={backButton} alt="" />
      </Link>
      <div className="results__container">
        {results.slice(0, 5).map((result) => {
          return <Result key={uuidv4()} result={result} />;
        })}
      </div>
    </>
  );
}
