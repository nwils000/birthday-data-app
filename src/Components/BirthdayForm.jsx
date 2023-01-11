import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useIsMount } from "../Hooks/UseIsMount";
import Footer from "./Footer";

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
  }, [isMount, search]);

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
      <div className="birthday-form">
        <div className="birthday-form-title__container">
          <h1 className="birthday-form__title">
            Top News Stories of Your Birth Year
          </h1>
        </div>
        <div className="birthday-form__container">
          <h2 className="birthday-form__heading">
            Enter Your Birth Month and Year
          </h2>
          <div className="birthday-form-input__container">
            <div className="birthday-form__year">
              <label className="birthday-form__label">Birth Year</label>
              <input
                className="birthday-form__input"
                ref={yearInputRef}
                type="number"
                min="1900"
                max="2022"
                defaultValue="1999"
              />
            </div>
            <div className="birthday-form__month">
              <label className="birthday-form__label">Birth Month</label>
              <input
                className="birthday-form__input"
                ref={monthInputRef}
                type="number"
                min="1"
                max="12"
              />
            </div>
          </div>
        </div>
        <button onClick={handleSearch} className="birthday-form__button">
          Search
        </button>
        <div className="footer-push"></div>
      </div>
      <Footer />
    </>
  );
}
