// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pageheader from './PageHeader/PageHeader.jsx';
import Fisch from './Fisch/Fisch.jsx';
import FourOhFour from './FourOhFour/FourOhFour.jsx';
import Home from './Home/Home.jsx';

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
            <Route path="/" component={Home} />
            <Route path="*" component={FourOhFour} />
          </Switch>
          <Fisch />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
