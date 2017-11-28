// @flow
import React, { Component } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer.jsx';
// import styles from './Home.css';

/**
 * ## Home
 *
 * @route /
 */
export default class Home extends Component<any> {
  // dropdown: ?HTMLSelectElement;

  /**
   * ## render
   *
   * renders the home content container
   *
   * @return {JSX} compiled jsx
   */
  render() {
    return <ContentContainer title={'Home'} />;
  }
}
