import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField, requestRobots } from '../action';
import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1"> RoboFriends</h1>
        <SearchBox search_txt={onSearchChange} />

        {!robots.length ? (
          <h1>loading</h1>
        ) : (
          <Scroll>
            <ErrorBoundary>
              <CardArray robots_list={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
