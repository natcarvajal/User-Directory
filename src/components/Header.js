import React from "react";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">Employee Directory</h1>
      <p className="lead text-center">
        Type in search bar below for an employee's name.
      </p>
    </div>
  );
}

export default Header;
