import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <label>Video Star</label>
        <input type='text' />
      </form>
    </div>
      )
  }
}

export default SearchBar;
