import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    error: "",
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.getUsers()
      .then((res) => this.setState({ results: res.data.results, search: "" }))
      .catch((err) => this.setState({ error: err, ...this.state }));
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    // This is where I would filter.
    // Maybe filter the results by this.state.search
    // idk ///
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.seach}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          button_label={this.state.search}
        />
        <ResultList results={this.state.results} value_for_show={"last"} />
      </div>
    );
  }
}

export default SearchResultContainer;
