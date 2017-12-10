// @flow
import React, { Component } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer.jsx';
import Skill from '../../components/Skill/Skill.jsx';

import config from '../../../config.json';

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
  // dropdown: ?HTMLSelectElement;

  state = {
    skills: [],
    skillGroups: [],
  };

  componentDidMount() {
    const authString = `?api_token=${config.TOKEN}`;

    fetch(`https://dwbe.knoblau.ch/api/skills${authString}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(r => r.json())
      .then(res => {
        this.setState({ skills: res });
      });

    fetch(`https://dwbe.knoblau.ch/api/skillgroups${authString}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(r => r.json())
      .then(res => {
        this.setState({ skillGroups: res });
      });

    // const fakeApi =
    //   '[{"id":1,"name":"Awareness","attribute":"per","description":"Awareness encompasses the character\u2019s subconscious ability to react to things his conscious mind may not perceive. He can use this Skill to notice threats\u2014such as ambushes, traps or cleverly hidden objects\u2014or slight changes in the environment\u2014such as a faint vibration of a far off Ork Squiggoth or the foul smell of a Daemonhost. When using Awareness against an opponent, the test is always opposed. This use includes noticing ambushes, spotting traps, and other things involving another\u2019s actions. However, noticing environmental factors is a standard test. This use includes perceiving trace scents, motion, or similar things.","group_id":null,"created_at":null,"updated_at":"2017-10-16 13:59:41","use":"Free Action made in reaction to something.","special":""},{"id":2,"name":"Carouse","attribute":"t","description":"The Carouse Skill is used to resist the effects of alcohol and narcotics. Frequent imbibers can build up quite a tolerance to alcohols and other drugs, remaining clear-headed and lucid while those across the table find their judgement or capabilities diminished. The character makes a Skill Test whenever he suffers the effects of alcohol or similar intoxicants (naturally, for Space Marines, this requires imbibing of truly prodigious amounts or toxicity!). Each time he would otherwise suffer from the effects of an intoxicant, make a Carouse Test. Failure indicates he gains a level of Fatigue or suffers the side effects of the substance. Should the character lose consciousness, he remains passed out for a number of hours equal to 1d10 minus his Toughness Bonus (minimum 1 hour). ","group_id":null,"created_at":null,"updated_at":"2017-10-16 13:59:55","use":"Free Action taken whenever the character imbibes","special":""},{"id":3,"name":"Charm","attribute":"fel","description":"The character can use Charm Skill to improve the disposition of others towards him, making a Charm Test whenever he wishes to change the minds of an individual or small group. The character need not make a Charm Test each time he speaks with others in a pleasant manner, but only when he wishes to change their opinion or disposition, or convince them to do something. All Charm Tests are opposed by Willpower and can affect a number of targets equal to the character\u2019s Fellowship Bonus. The targets must be able to see and hear the character clearly, and share a common language.","group_id":null,"created_at":null,"updated_at":"2017-10-16 14:00:11","use":"1 minute","special":"Inspire Those in a position of authority can use the Charm Skill to inspire a group-related test, either with positive or negative reinforcement. Success provides a +10 bonus to the next Characteristic Test of the motivated group, such as passing a Willpower Test to resist Fear or recover from Pinning. Thus, a Battle-Brother might inspire lesser Imperial troopers to fight  harder, or the Kill-team\u2019s Brother-Chaplain might rouse his brothers with an impassioned prayer to the Emperor."},{"id":4,"name":"Chem-Use","attribute":"int","description":"The Chem-Use Skill allows the character to safely identify, handle, and prepare a variety of chemicals, toxins, poisons, and drugs. While Chem-Use covers the use and basic combination of these substances, the Trade (Chymist) Skill deals with their manufacture from base components. Success in a Chem-Use Test, modiied by the appropriate dificulty for the chemical or drug in question, indicates it has been administered, combined, or otherwise applied correctly, providing the desired results. Failure on the test indicates the dose was wasted without effect. See Chapter V: Armoury for more information on drugs, chemicals, and their effects.","group_id":null,"created_at":null,"updated_at":"2017-10-16 14:00:34","use":"Full Action; when using a medicae injector or narthecium, the Skill Test to administer a drug or antidote is reduced to a Half Action. Employing Chem-Use to apply particularly complex combinations of substances or toxins requires an Extended Test of duration and dificulty set by the GM for the treatment in question.","special":""},{"id":5,"name":"Xenos Markings","attribute":"int","description":"Many aliens, such as Orks, make extensive use of symbolism and icons. Understanding these markings allows a broad understanding of their meaning, such as where a tribe has marked its boundaries or areas they have marked as dangerous. ","group_id":1,"created_at":null,"updated_at":null,"use":"","special":""},{"id":6,"name":"Deathwatch","attribute":"int","description":"Kill-teams often develop their own shorthand communication to allow them to converse quickly and secretively in the presence of others. This is especially useful when dealing with other arms of the Imperial war machine, where the goals of the Deathwatch may not coincide with those of the Imperial Guard or Navy.","group_id":1,"created_at":null,"updated_at":"2017-10-14 08:49:43","use":"","special":""},{"id":7,"name":"Chapter Runes","attribute":"int","description":"Each Chapter of the Adeptus Astartes has its own form of ciphers used to communicate between its Battle-Brothers. These closely guarded secrets are almost never taught to those outside the Chapter and constitute a reliable way for those within the Chapter to quickly identify each other.","group_id":1,"created_at":null,"updated_at":"2017-10-14 08:49:35","use":"","special":""},{"id":8,"name":"Imperial Codes","attribute":"int","description":"Both the Imperial Navy and the Imperial Guard employ a battle language which comprises mostly of numbers and acronyms. Incomprehensible to those who do not know its meaning, it allows them to quickly signal for reinforcements, identify enemies, and call down ire support.","group_id":1,"created_at":null,"updated_at":null,"use":"","special":""},{"id":9,"name":"Inquisition","attribute":"int","description":"Used to communicate a private and pre-arranged code between given agents of the Inquisition. Note that these codes are unique to speciic Ordos within the Inquisition. This Skill Group applies to all ciphers used by acolytes and throne agents of the Inquisition.","group_id":1,"created_at":null,"updated_at":null,"use":"","special":""},{"id":10,"name":"Mercenary Cant","attribute":"int","description":"Many mercenary companies operate in the Imperium, and each has an abbreviated, clipped battle language for orders and commands. Though there are some commonalities, each is essentially unique.","group_id":1,"created_at":null,"updated_at":null,"use":"","special":""},{"id":11,"name":"Underworld","attribute":"int","description":"Crime lords have used ciphers since before the time of the Emperor, and their sophistication has only increased over time. Each organisation uses its own to deter competition.","group_id":1,"created_at":null,"updated_at":null,"use":"","special":""},{"id":12,"name":"Climb","attribute":"s","description":"With the Climb Skill the character can ascend or descend ropes, pipes, scaffolding, and both natural and man-made walls. This Skill is not used for ladders or other easily ascended ways, but for climbs without ready handholds or other poor climbing conditions. The condition of the surface or item and the environmental conditions can impose additional bonuses or penalties. It is far more dificult to ascend an icy rock face in a blizzard than the outer shell of a hive that is crisscrossed with pipes and conduits. A successful test allows the character to ascend or descend at one-half his half move rate. See Climbing in Chapter VII: Playing the Game for more details.","group_id":null,"created_at":null,"updated_at":"2017-10-16 14:00:49","use":"Half Action","special":""},{"id":13,"name":"Command","attribute":"fel","description":"The character uses the Command Skill to both direct those under his authority and establish actions for groups to execute on command, such as launching an assault or ordering a regroup. This Skill is only effective upon those under the character\u2019s authority. A successful Command Test indicates that those whom he directs follow his instructions in a timely manner. Failure on the Skill Test when used on an individual simply means that he does not follow the character\u2019s directions, though additional Degrees of Failure can indicate that the underling accepts the task with no intention of actually doing it, or that he misinterprets the command or takes contradictory actions. For directing groups, Degrees of Success or Failure increase or decrease the time necessary to execute the orders, with three or more Degrees of Failure subjecting them to confused inaction. A Command Test can affect a number of targets equal to the character\u2019s Fellowship Bonus. The targets must be able to see and hear the character\u2014though this could be done remotely through a vox or pict-caster\u2014and speak a common language.  ","group_id":null,"created_at":null,"updated_at":"2017-10-16 14:01:26","use":"Half Action for simple commands, Full Action for more involved direction","special":"Extend Support Range As a Half Action the Battle-Brother nominated as the squad\u2019s leader (see page 238) may extend his Kill-team\u2019s Support Range (see page 213) by a number of metres equal to his Fellowship Bonus. For this Skill to work the Battle-Brother must be either within visual or vocal range of his Kill-team. This extension lasts until the start of the Battle-Brother\u2019s next turn."},{"id":14,"name":"Concealment","attribute":"ag","description":"The Concealment Skill is used to hide things, from small objects to vehicles to starships, even oneself. Use of the Skill requires an appropriate environment to mask the item in question, such as buildings and trees for a small shuttle or an asteroid ield or a space anomaly for a starship. Concealment is always an Opposed Test, pitting the character\u2019s Concealment against his opponent\u2019s Awareness or Scrutiny. Thus, the character only makes the test when someone looks for him. If the character or the object he intends to hide remains perfectly still, he gains a +10 bonus to the Skill Test.","group_id":null,"created_at":null,"updated_at":"2017-10-16 14:01:37","use":"Half Action","special":""}]';
    // this.setState({ skills: JSON.parse(fakeApi) });
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
      <ContentContainer title={'Skills'}>
        {skills.map((skill, i) => {
          return <Skill data={skill} skillGroups={skillGroups} key={i} />;
        })}
      </ContentContainer>
    );
  }
}
