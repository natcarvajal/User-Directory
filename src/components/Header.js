import React from "react";

function Header() {
  return (
    <div class="jumbotron">
      <h1 class="display-4 text-center">Employee Directory</h1>
      <p class="lead text-center">
        Type in search bar beow for an employee's name.
      </p>
      <p>
        Click the table header to toggle names in ascending/descending order.
      </p>
      <a class="btn btn-primary btn-lg" href="#" role="button">
        Search
      </a>
    </div>
  );
}

export default Header;
