import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useIsMount } from "../Hooks/UseIsMount";

export default function BirthdayForm() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(["hi"]);
  const [toResults, setToResults] = useState(false);

  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      console.log("First Render");
    } else {
      axios
        .get(search, {
          headers: {
            "X-Api-Key": "Ro8pM4o+uQ8aK4LiyVZbrA==EqJnLW628ojQKOfR",
          },
        })
        .then((res) => {
          setResults(res.data);
          setToResults(true);
        });
    }
  }, [search]);

  if (toResults === true) {
    return <Navigate to="/results" state={{ results }} />;
  }

  function appendZero(inputRef) {
    return inputRef.current.value < 10 ? "0" : "";
  }

  function handleSearch() {
    let appendMonthZero = appendZero(monthInputRef);
    let text =
      "https://api.api-ninjas.com/v1/historicalevents?" +
      "year=" +
      yearInputRef.current.value +
      "&month=" +
      appendMonthZero +
      monthInputRef.current.value;
    setSearch(text);
  }

  return (
    <>
      <div>
        <h1>Top News Stories of Your Birth Year</h1>
      </div>
      <div>
        <h2>Enter Your Birth Month and Year</h2>
        <div>
          <div>
            <label>Birth Year</label>
            <input
              ref={yearInputRef}
              type="number"
              min="1900"
              max="2022"
              defaultValue="1999"
            />
          </div>
          <div>
            <label>Birth Month</label>
            <input ref={monthInputRef} type="number" min="1" max="12" />
          </div>
        </div>
      </div>
      <button onClick={handleSearch}>Search</button>
    </>
  );
}