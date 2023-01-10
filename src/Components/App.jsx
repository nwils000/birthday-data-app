import React from "react";
import BirthdayForm from "./BirthdayForm";
import Results from "./Results";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BirthdayForm />}></Route>
      <Route path="/results" element={<Results />}></Route>
    </Routes>
  );
}
