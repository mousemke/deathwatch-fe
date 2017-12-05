// @flow
import React, { Component } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer.jsx';
import config from '../../../config.json';

// import styles from './Skills.css';

type Props = {};

type State = {
  skills: Array<Object>,
};

/**
 * ## Skills
 *
 * @route /
 */
export default class Skills extends Component<Props, State> {
  // dropdown: ?HTMLSelectElement;

  state = {
    skills: [],
  };

  componentDidMount() {
    const authString = `${config.user}:${config.pass}`;

    fetch('http://dwbe.knoblau.ch/api/skills', {
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': 'origin',
        Authorization: `Basic ${btoa(authString)}`,
      },
    })
      .then(r => r.json())
      .then(res => {
        this.setState({ skills: res });
      });
  }

  /**
   * ## render
   *
   * renders the Skills content container
   *
   * @return {JSX} compiled jsx
   */
  render() {
    return (
      <ContentContainer title={'Skills'}>
        {this.state.skills.map((skill, i) => {
          return <div key={i}>{JSON.stringify(skill)}</div>;
        })}
      </ContentContainer>
    );
  }
}
