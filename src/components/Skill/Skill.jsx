// @flow
import React, { Component } from 'react';
import attributes from '../../constants/attributes.constants.js';

import styles from './Skill.css';

/**
 * ## Skill
 *
 * cotains a skill and events
 */
export default class Skill extends Component<any> {
  state = {
    expanded : false,
  };

  expand = () =>
  {
    this.setState({expanded: !this.state.expanded});
  }

  /**
   * ## render
   *
   * renders one skill and it's events
   *
   * @return {JSX} compiled jsx
   */
  render()
  {
    const {
      id,
      name,
      attribute,
      description,
      updated_at,
      use,
      special,
    } = this.props.data;

    const {
      expanded
    } = this.state;

    return (
      <div
        data-id={id}
        className={`${styles.skill} ${expanded ? styles.expanded : styles.collapsed}`}
        onClick={this.expand}
      >
        <div className={styles.titleRow}>
          <span className={styles.name}>
          {
            name
          }
          </span>
          <span className={styles.attribute}>
          {
            `(${attributes[attribute]})`
          }
          </span>
        </div>
        <div className={`${styles.details}`}>
          <div>{description}</div>
          <div>Skill Use: {use}</div>
          <div>Special Uses: {special}</div>
        </div>
        <div className={styles.timestamp}>
          Last modified: {updated_at}
        </div>
      </div>
    );
  }
}
