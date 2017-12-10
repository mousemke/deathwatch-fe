// @flow
import React, { Component } from 'react';
import attributes from '../../constants/attributes.constants.js';

import styles from './Skill.css';

type Props = {
  data: {
    id: string,
    name: string,
    attribute: string,
    description: string,
    use: string,
    special: string,
    group_id: string,
  },
  skillGroups: Array<{ name: string }>,
};

type State = {
  expanded: boolean,
};

/**
 * ## Skill
 *
 * cotains a skill and events
 */
export default class Skill extends Component<Props, State> {
  state = {
    expanded: false,
  };

  expand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  /**
   * ## render
   *
   * renders one skill and it's events
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { skillGroups = [], data } = this.props;

    const { id, name, attribute, description, use, special } = data;

    // eslint-disable-next-line camelcase
    const groupId = parseInt(data.group_id);

    const { expanded } = this.state;

    const skillGroup = skillGroups[groupId - 1];
    let longName = name;

    if (skillGroups && skillGroup) {
      longName = `${skillGroup.name} :${longName}`;
    }

    return (
      <button
        data-id={id}
        className={`${styles.skill} ${expanded ? styles.expanded : ''}`}
        onClick={this.expand}
      >
        <div className={styles.titleRow}>
          <span>{longName}</span>
          <span className={styles.attribute}>
            {`(${attributes[attribute]})`}
          </span>
        </div>
        <div className={styles.details}>
          {description ? (
            <div className={styles.details}>{description}</div>
          ) : null}
          {use ? <div className={styles.details}>Skill Use: {use}</div> : null}
          {special ? (
            <div className={styles.details}>Special Uses: {special}</div>
          ) : null}
        </div>
      </button>
    );
  }
}
