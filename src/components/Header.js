import React from "react";

function Header() {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">Employee Directory</h1>
      <p className="lead text-center">
        Type in search bar beow for an employee's name.
      </p>
      <p className="lead text-center">
        Click the table header to toggle names in ascending/descending order.
      </p>
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
      ></input>

      <a className="btn btn-primary btn-lg" href="#" role="button">
        Search
      </a>
    </div>
  );
}

export default Header;
