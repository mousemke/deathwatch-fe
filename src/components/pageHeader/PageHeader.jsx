// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown.jsx';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import styles from './PageHeader.css';

type Props = {};

type State = {
  dropdownOptions: Array<Object>,
};

type optionType = {
  value: string,
  label: string,
  className: string,
};

/**
 * ## Pageheader
 *
 * top of the page
 */
class Pageheader extends Component<Props, State> {
  static defaultProps = {
    name: 'anonymous',
  };

  state = {
    dropdownOptions: [],
  };

  props: Props;

  componentDidMount() {
    this.getDropdownOptions().then(options => {
      this.setState({ dropdownOptions: options });
    });
  }

  getDropdownOptions(): Promise<Array<optionType>> {
    return new Promise(resolve => {
      resolve([
        {
          value: 'http://dwbe.knoblau.ch/admin/characters',
          label: 'Characters',
          className: 'Characters',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/skills',
          label: 'Skills',
          className: 'Skills',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/skillgroups',
          label: 'Skill Groups',
          className: 'Skill Groups',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/traits',
          label: 'Traits',
          className: 'Traits',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/talents',
          label: 'Talents',
          className: 'Talents',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/talentoptions',
          label: 'Talent Options',
          className: 'Talent Options',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/psychicpowers',
          label: 'Psychic Powers',
          className: 'Psychic Powers',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/psychicpowercategories',
          label: 'Psychic Powers Categories',
          className: 'Psychic Powers Categories',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/wargear',
          label: 'Wargear',
          className: 'Wargear',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/wargearcategories',
          label: 'Wargear Categories',
          className: 'Wargear Categories',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/weapons',
          label: 'Weapons',
          className: 'Weapons',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/weaponcategories',
          label: 'Weapon Categories',
          className: 'Weapon Categories',
        },
        {
          value: 'http://dwbe.knoblau.ch/admin/specialqualities',
          label: 'Weapon Special Qualities',
          className: 'Weapon Special Qualities',
        },
      ]);
    });
  }

  /**
     * ## render
     *
     * renders the header with search
     *
     * @return {JSX} compiled jsx
     */
  render() {
    const dropdownOptions = this.state.dropdownOptions;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link to="/" className={styles.homeButton}>
            Home
          </Link>
          <Input placeholder={'Search'} />
          <Button title={'Submit'} />
          <Dropdown
            className={styles.navigationDropdown}
            options={dropdownOptions}
          />
        </div>
      </div>
    );
  }
}

export default Pageheader;
