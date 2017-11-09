import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={
      searchValue: ''
    };
    this.handleSearch=this.handleSearch.bind(this);
    this.onSearch=this.onSearch.bind(this);
  }
  onSearch(event){
    this.setState({searchValue: event.target.value});
  }
  handleSearch(){
    this.props.onSearch(this.state.searchValue);
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.onSearch}/>
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
