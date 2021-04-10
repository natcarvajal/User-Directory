import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredUsers: [],
    sortedUsers: false,
    error: "",
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.getUsers()
      .then((res) => {
        console.log(res.data.results);
        this.setState({
          results: res.data.results,
          search: "",
          filteredUsers: res.data.results,
        });
      })
      .catch((err) => this.setState({ error: err, ...this.state }));
  }

  searchEmployees = () => {
    var newFilteredUsers;
    newFilteredUsers = this.state.results.filter((user) => {
      if (user.name.first.toLowerCase() === this.state.search.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
    if (!this.state.search) {
      newFilteredUsers = this.state.results;
    }
    console.log(this.state.search);

    this.setState({ filteredUsers: newFilteredUsers });
  };

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

  handleSort = (event) => {
    event.preventDefault();
    var sortArray;
    if (this.state.sortedUsers === false) {
      sortArray = this.state.results.sort(function (a, b) {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      });
    } else {
      sortArray = this.state.results.sort(function (a, b) {
        if (a.name.first < b.name.first) {
          return 1;
        }
        if (a.name.first > b.name.first) {
          return -1;
        }
        return 0;
      });
    }

    this.setState({
      results: sortArray,
      sortedUsers: !this.state.sortedUsers,
    });
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          button_label={this.state.search}
          handleSort={this.handleSort}
        />
        <ResultList results={this.state.filteredUsers} />
      </div>
    );
  }
}

export default SearchResultContainer;

// value_for_show={"last"}
