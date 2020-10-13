import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = () => {

  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form'>
          <label>Video Star</label>
          <input type='text' value={this.state.term} onChange={this.onInputChange}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
