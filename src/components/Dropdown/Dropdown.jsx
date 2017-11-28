// @flow
import React, { Component } from 'react';
// import Flounder from 'flounder';

import styles from './Dropdown.css';

/**
 * ## Dropdown
 *
 * cotains a styled dropdown
 */
export default class Dropdown extends Component<any> {
  dropdown: ?HTMLSelectElement;

  /**
   * ## render
   *
   * renders a styled dropdown and handles its events
   *
   * @return {JSX} compiled jsx
   */
  render() {
    return (
      <select ref={el => (this.dropdown = el)} className={styles.dropdown}>
        <option value="">moon?</option>
      </select>
    );
  }
}
