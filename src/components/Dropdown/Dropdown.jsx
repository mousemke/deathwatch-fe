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
    const { className, options } = this.props;

    return (
      <select
        ref={el => (this.dropdown = el)}
        className={`${styles.dropdown} ${className || ''}`}
      >
        {options.map((opt, i) => {
          return (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    );
  }
}
