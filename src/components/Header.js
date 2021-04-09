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
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Employee's Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        ></input>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
