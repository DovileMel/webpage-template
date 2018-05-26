import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
