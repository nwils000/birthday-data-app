import React from "react";
import Result from "./Result";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Results() {
  const location = useLocation();
  let results = location.state.results;

  return (
    <div className="results__container">
      {results.slice(0, 5).map((result) => {
        return <Result key={uuidv4()} result={result} />;
      })}
    </div>
  );
}
