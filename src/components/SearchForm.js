import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          {" "}
          Search
        </button>{" "}
        <button onClick={props.handleSort} className="btn btn-primary mt-3">
          {" "}
          Sort by Name
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
