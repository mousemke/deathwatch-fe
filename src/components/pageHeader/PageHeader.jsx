// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown.jsx';
import Input from '../Input/Input.jsx';
import styles from './PageHeader.css';

type Props = {
  name: string,
};

/**
 * ## Pageheader
 *
 * top of the page
 */
class Pageheader extends Component<Props> {
  static defaultProps = {
    name: 'anonymous',
  };

  props: Props;

  /**
     * ## render
     *
     * renders the header with search
     *
     * @return {JSX} compiled jsx
     */
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link to="/" className={styles.homeButton}>
            Home
          </Link>
          <Input placeholder={'Search'} />
          <Dropdown className={styles.navigationDropdown} />
        </div>
      </div>
    );
  }
}

export default Pageheader;
