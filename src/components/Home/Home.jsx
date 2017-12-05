// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    return (
      <ContentContainer title={'Dashboard'}>
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>
              <Link to="/skills">Skills</Link>
            </h2>
            <h2>
              <a href="http://dwbe.knoblau.ch/talents">Talents</a>
            </h2>
            <h2>
              <a href="http://dwbe.knoblau.ch/traits">Traits</a>
            </h2>
            <h2>
              <a href="http://dwbe.knoblau.ch/psychicpowers">Psychic Powers</a>
            </h2>
            <ul>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/1">
                  Telepathy Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/2">
                  Divination Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/3">
                  Codex Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/4">
                  Blood Angels Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/5">
                  Dark Angels Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/6">
                  Space Wolves Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/7">
                  Storm Wardens Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/8">
                  Ultramarines Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/9">
                  Iron Hands Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/10">
                  Raven Guard Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/11">
                  Salamanders Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/12">
                  White Scars Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/13">
                  Imperial Fists Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/14">
                  Blood Raven Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/15">
                  Red Scorpions Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/16">
                  Marines Errant Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/17">
                  Flesh Tearers Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/18">
                  Crimson Fist Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/19">
                  Howling Griffon Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/20">
                  Novamarines Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/21">
                  Raptors Powers
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/psychicpowers/22">
                  Carcharodons Powers
                </a>
              </li>
            </ul>
            <h2>
              <a href="http://dwbe.knoblau.ch/wargear">Wargear</a>
            </h2>
            <ul>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/1">
                  Tools and Equipment
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/2">
                  Drugs and Consumables
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/3">
                  Special Issue Ammunition
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/4">Cybernetics</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/5">Servitors</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/6">Psyber Familiars</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/7">Weapon Upgrades</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/8">Chapter Trappings</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/wargear/9">Relics</a>
              </li>
            </ul>
            <h2>
              <a href="http://dwbe.knoblau.ch/weapons">Weapons</a>
            </h2>
            <ul>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/1">Bolt Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/2">Plasma Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/3">Melta Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/4">Flame Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/5">
                  Solid Projectile Weapons
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/6">Las Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/7">
                  Grenades And Missiles
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/8">Launchers</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/9">Exotic Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/10">Chain Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/11">Power Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/12">Force Weapons</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/13">
                  Traditional Weapons
                </a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/weapons/14">Relics</a>
              </li>
            </ul>
            <h2>Character Advances</h2>
            <ul>
              <li>
                <a href="http://dwbe.knoblau.ch/andee">Andee</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/garreth">Garreth</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/joder">Joder</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/mouse">Mouse</a>
              </li>
              <li>
                <a href="http://dwbe.knoblau.ch/zack">Zack</a>
              </li>
            </ul>
          </div>
        </div>
      </ContentContainer>
    );
  }
}
