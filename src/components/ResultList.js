import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.length
        ? props.results.map((result) => (
            <li className="list-group-item" key={result.id}>
              {JSON.stringify(result)}
              <img
                alt={result.title}
                className="img-fluid"
                src={result.picture.large}
              />
              <p>{result.name[props.value_for_show]}</p>
            </li>
          ))
        : ""}
    </ul>
  );
}

export default ResultList;
