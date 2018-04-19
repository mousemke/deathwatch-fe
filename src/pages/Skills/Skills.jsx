// @flow
import React, { Component } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer.jsx';
import Skill from '../../components/Skill/Skill.jsx';
import apiGet from '../../common/api';

type Props = {};

type State = {
  skills: Array<Object>,
  skillGroups: Array<Object>,
};

/**
 * ## Skills
 *
 * @route /
 */
export default class Skills extends Component<Props, State> {
  skillsContainer: ?ContentContainer;

  state = {
    skills: [],
    skillGroups: [],
  };

  componentDidMount() {
    apiGet('skills').then(res => {
      this.setState({ skills: res });
    });

    apiGet('skillGroups').then(res => {
      this.setState({ skillGroups: res });
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
    const { skills, skillGroups } = this.state;

    return (
      <ContentContainer title="Skills" ref={el => (this.skillsContainer = el)}>
        {skills.map((skill, i) => {
          return <Skill data={skill} skillGroups={skillGroups} key={i} />;
        })}
      </ContentContainer>
    );
  }
}
