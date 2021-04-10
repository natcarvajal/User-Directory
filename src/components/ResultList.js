import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.length
        ? props.results.map((result) => (
            <li className="list-group-item" key={result.id}>
              <img
                alt={result.title}
                className="img-fluid"
                src={result.picture.large}
              />

              <li>
                Name: {result.name.first} {result.name.last}
              </li>
              <li> Address: {result.email}</li>
              <li> Email: {result.email}</li>
              <li> Cell: {result.cell}</li>
            </li>
          ))
        : ""}
    </ul>
  );
}

export default ResultList;

// line9: {JSON.stringify(result)}

// [props.value_for_show]
