import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Dir from "./components/Dir";

function App() {
  return (
    <>
      <Header />
      <Dir />
    </>
  );
}

export default App;

// Given a table of random users generated from the Random User API, when the user loads the page, a table of employees should render.
// The user should be able to:

// Sort the table by at least one category

// Filter the users by at least one property.
