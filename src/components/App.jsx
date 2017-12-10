// @flow

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pageheader from './PageHeader/PageHeader.jsx';
import Fisch from './Fisch/Fisch.jsx';
import FourOhFour from './FourOhFour/FourOhFour.jsx';
import Home from '../pages//Home/Home.jsx';
import Skills from '../pages/Skills/Skills.jsx';

import styles from './App.css';

type Props = {
  name?: string,
};

/**
 * ## App
 *
 * app wrapper around the site
 */
class App extends Component<Props> {
  static defaultProps = {
    name: 'anonymous',
  };

  /**
     * ## render
     *
     * renders the App. contains a sometimes fish.
     *
     * @return {JSX} compiled jsx
     */
  render() {
    return (
      <BrowserRouter>
        <div className={styles.AppWrapper}>
          <Pageheader name={this.props.name} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/skills/" component={Skills} />
            <Route path="*" component={FourOhFour} />
          </Switch>
          <Fisch />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
