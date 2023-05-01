import React from 'react';
import CombatChainLink from 'features/CombatChainLink';
import styles from '../CountersOverlay.module.css';
import {
  GiCycle,
  GiElectric,
  GiShield,
  GiShoulderArmor,
  GiZigzagLeaf
} from 'react-icons/gi';
import { BiBullseye } from 'react-icons/bi';
type Props = {
  activeCombatChain?: CombatChainLink;
};
export const ActiveCardCounterOverlay = (props: Props) => {
  const { activeCombatChain } = props;

  if (!activeCombatChain) {
    return null;
  }
  return (
    <>
      {activeCombatChain.goAgain && (
        <div className={styles.icon} data-tooltip="Go Again">
          <GiCycle />
        </div>
      )}
      {activeCombatChain.dominate && (
        <div className={styles.icon} data-tooltip="Dominate">
          <BiBullseye />
        </div>
      )}
      {activeCombatChain.overpower && (
        <div className={styles.icon} data-tooltip="Overpower">
          <GiElectric />
        </div>
      )}
      {activeCombatChain.fused && (
        <div className={styles.icon} data-tooltip="Fused">
          <GiZigzagLeaf />
        </div>
      )}
      {!!activeCombatChain.damagePrevention && (
        <div
          className={styles.icon}
          data-tooltip={`${activeCombatChain.damagePrevention} Damage Prevention`}
        >
          <GiShield />
          {activeCombatChain.damagePrevention}
        </div>
      )}
      {activeCombatChain.numRequiredEquipBlock && (
        <div
          className={styles.icon}
          data-tooltip={`Chain link must be defended with at least ${activeCombatChain.numRequiredEquipBlock} equipment`}
        >
          <GiShoulderArmor />
          {activeCombatChain.numRequiredEquipBlock}
        </div>
      )}
    </>
  );
};