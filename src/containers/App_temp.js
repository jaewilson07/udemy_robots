import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField, requestRobots } from '../action';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  //to allow you to access the this.
  onSearchChange = (event) => {
    this.setState({ searchField :event.target.value});
  }

  render() {
      filteredRobots = ... 
    return (
      <div className="tc">
        <SearchBox search_txt={onSearchChange} />
        <cardList robots= {filteredRobots} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
