// @flow

import {connect} from 'react-redux';
import createAction from '../reducers/createAction';
import {getImperialRewards} from '../reducers/app';
import goalFunctions from '../reducers/missions';
import GoalPanel from '../components/GoalPanel';
import type {StateType} from '../reducers/types';
import upperFirst from 'lodash/upperFirst';

const getGoalText = (state: StateType) => {
  const fn = goalFunctions[`get${upperFirst(state.app.currentMission)}GoalText`];
  if (fn) {
    return fn(state);
  }
  return [];
};

const mapStateToProps = (state: StateType) => ({
  currentMission: state.app.currentMission,
  desperateHourClearingReachable: state.desperateHour.missionState === 2,
  fireInTheSkyCanDepart: state.fireInTheSky.weaponsConsoleSliced,
  forestAmbushCampEntered: state.forestAmbush.campEntered,
  generalWeissActive: state.chainOfCommand.generalWeissActive,
  generalWeissDeployed: state.chainOfCommand.generalWeissDeployed,
  generousDonationsVirusUploaded: state.generousDonations.virusUploaded,
  goalText: getGoalText(state),
  lastStandVaderDeployed: state.lastStand.doorState === 3,
  rewardBountyEarned: Boolean(getImperialRewards(state).bounty),
  rewardOldWoundsEarned: Boolean(getImperialRewards(state).oldWounds),
});

const looseCannonDefeatAtst = () => createAction('LOOSE_CANNON_DEFEAT_ATST');
const spiceJobGetKeycard = () => createAction('SPICE_JOB_GET_KEYCARD');
const incomingEnterCorridor = () => createAction('INCOMING_ENTER_CORRIDOR');
const vipersDenHeroGetCore = () => createAction('VIPERS_DEN_HERO_GET_CORE');
const vipersDenImperialGetCore = () => createAction('VIPERS_DEN_IMPERIAL_GET_CORE');
const vipersDenFigureDropsCore = () => createAction('VIPERS_DEN_FIGURE_DROPS_CORE');
const vipersDenImperialEscapes = () => createAction('VIPERS_DEN_IMPERIAL_ESCAPES');
const generousDonationsTerminalDestroyed = (id: number) =>
  createAction('GENEROUS_DONATIONS_TERMINAL_DESTROYED', {id});
const chainOfCommandTerminalInteract = () => createAction('CHAIN_OF_COMMAND_TERMINAL_INTERACT');
const chainOfCommandWeissDefends = () => createAction('CHAIN_OF_COMMAND_WEISS_DEFENDS');
const chainOfCommandWeissEntered = () => createAction('CHAIN_OF_COMMAND_WEISS_ENTERED');
const theSourceOfficerFreed = () => createAction('THE_SOURCE_OFFICER_FREED');
const lastStandVaderBlock = () => createAction('LAST_STAND_VADER_BLOCK');
const desperateHourEnteredClearing = () => createAction('DESPERATE_HOUR_ENTERED_CLEARING');
const sympathyForTheRebellionHeroClaim = () =>
  createAction('SYMPATHY_FOR_THE_REBELLION_HERO_CLAIM');
const sympathyForTheRebellionImperialClaim = () =>
  createAction('SYMPATHY_FOR_THE_REBELLION_IMPERIAL_CLAIMED');
const sympathyForTheRebellionImperialDefeatRebel = () =>
  createAction('SYMPATHY_FOR_THE_REBELLION_IMPERIAL_DEFEAT_REBEL');
const sympathyForTheRebellionImperialDone = () =>
  createAction('STATUS_PHASE_END_ROUND_EFFECTS_DONE');
const armedAndOperationalWarshipDestroyed = () =>
  createAction('ARMED_AND_OPERATIONAL_WARSHIP_DESTROYED');
const pastLifeEnemiesActivateC3PO = () => createAction('PAST_LIFE_ENEMIES_ACTIVATE_C3PO');
const pastLifeEnemiesDiscardTerminal1 = () => createAction('PAST_LIFE_ENEMIES_DISCARD_TERMINAL_1');
const pastLifeEnemiesDiscardTerminal2 = () => createAction('PAST_LIFE_ENEMIES_DISCARD_TERMINAL_2');
const pastLifeEnemiesDiscardTerminal3 = () => createAction('PAST_LIFE_ENEMIES_DISCARD_TERMINAL_3');
const fireInTheSkyDepart = () => createAction('FIRE_IN_THE_SKY_DEPART');
const forestAmbushSetCampEntered = () => createAction('FOREST_AMBUSH_CAMP_ENTERED');
const imperialEntanglementsAirlockReleased = () =>
  createAction('IMPERIAL_ENTANGLEMENTS_AIRLOCK_RELEASED');
const imperialEntanglementsSchematicsUploaded = () =>
  createAction('IMPERIAL_ENTANGLEMENTS_SCHEMATICS_UPLOADED');
const braceForImpactHeroesDepart = () => createAction('BRACE_FOR_IMPACT_HEROES_DEPART');
const escapeFromCloudCityPrisonerClaimed = () =>
  createAction('ESCAPE_FROM_CLOUD_CITY_PRISONER_CLAIMED');
const escapeFromCloudCityShuttleLaunched = () =>
  createAction('ESCAPE_FROM_CLOUD_CITY_SHUTTLE_LAUNCHED');
const survivalOfTheFittestRevealSouthOfTile17A = () =>
  createAction('SURVIVAL_OF_THE_FITTEST_REVEAL_SOUTH_OF_TILE_17A');
const survivalOfTheFittestRevealSouthOfTile04A = () =>
  createAction('SURVIVAL_OF_THE_FITTEST_REVEAL_SOUTH_OF_TILE_04A');
const survivalOfTheFittestCaveRevealed = () =>
  createAction('SURVIVAL_OF_THE_FITTEST_CAVE_REVEALED');
const survivalOfTheFittestCavernRevealed = () =>
  createAction('SURVIVAL_OF_THE_FITTEST_CAVERN_REVEALED');
const survivalOfTheFittestPassRevealed = () =>
  createAction('SURVIVAL_OF_THE_FITTEST_PASS_REVEALED');
const survivalOfTheFittestRevealEastOfTile12A = () =>
  createAction('SURVIVAL_OF_THE_FITTEST_TILE_07A_REVEALED');
const theHardWayAllTokensPlaced = () => createAction('THE_HARD_WAY_ALL_TOKENS_PLACED');

const mapDispatchToProps = {
  armedAndOperationalWarshipDestroyed,
  braceForImpactHeroesDepart,
  chainOfCommandTerminalInteract,
  chainOfCommandWeissDefends,
  chainOfCommandWeissEntered,
  desperateHourEnteredClearing,
  escapeFromCloudCityPrisonerClaimed,
  escapeFromCloudCityShuttleLaunched,
  fireInTheSkyDepart,
  forestAmbushSetCampEntered,
  generousDonationsTerminalDestroyed,
  imperialEntanglementsAirlockReleased,
  imperialEntanglementsSchematicsUploaded,
  incomingEnterCorridor,
  lastStandVaderBlock,
  looseCannonDefeatAtst,
  pastLifeEnemiesActivateC3PO,
  pastLifeEnemiesDiscardTerminal1,
  pastLifeEnemiesDiscardTerminal2,
  pastLifeEnemiesDiscardTerminal3,
  spiceJobGetKeycard,
  survivalOfTheFittestCaveRevealed,
  survivalOfTheFittestCavernRevealed,
  survivalOfTheFittestPassRevealed,
  survivalOfTheFittestRevealEastOfTile12A,
  survivalOfTheFittestRevealSouthOfTile04A,
  survivalOfTheFittestRevealSouthOfTile17A,
  sympathyForTheRebellionHeroClaim,
  sympathyForTheRebellionImperialClaim,
  sympathyForTheRebellionImperialDefeatRebel,
  sympathyForTheRebellionImperialDone,
  theHardWayAllTokensPlaced,
  theSourceOfficerFreed,
  vipersDenFigureDropsCore,
  vipersDenHeroGetCore,
  vipersDenImperialEscapes,
  vipersDenImperialGetCore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalPanel);
