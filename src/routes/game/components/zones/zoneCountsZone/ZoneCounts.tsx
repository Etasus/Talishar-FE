import React, { useState } from 'react';
import {
  GiAngelOutfit,
  GiCannon,
  GiCircleClaws,
  GiDrop,
  GiFluffySwirl,
  GiHand,
  GiStack,
  GiTombstone
} from 'react-icons/gi';
import { useAppDispatch, useAppSelector } from 'app/Hooks';
import { RootState } from 'app/Store';
import { setCardListLoadFocus } from 'features/game/GameSlice';
import Displayrow from 'interface/Displayrow';
import styles from './ZoneCounts.module.css';
import classNames from 'classnames';

export const ZoneCounts = (prop: Displayrow) => {
  const soulCount = useAppSelector((state: RootState) =>
    prop.isPlayer
      ? state.game.playerOne.SoulCount
      : state.game.playerTwo.SoulCount
  );

  const bloodDebt = useAppSelector((state: RootState) =>
    prop.isPlayer
      ? state.game.playerOne.bloodDebtCount
      : state.game.playerTwo.bloodDebtCount
  );

  if (!soulCount && !bloodDebt) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <SoulCount {...prop} />
        <BloodDebtCount {...prop} />
      </div>
    </div>
  );
};

const SoulCount = (prop: Displayrow) => {
  const [hasSoul, setHasSoul] = useState(false);
  const dispatch = useAppDispatch();
  const { isPlayer } = prop;
  const soulCount = useAppSelector((state: RootState) =>
    isPlayer ? state.game.playerOne.SoulCount : state.game.playerTwo.SoulCount
  );

  const soulDisplay = () => {
    const playerPronoun = isPlayer ? 'Your' : "Your Opponent's";
    const popUpName = isPlayer ? 'mySoulPopup' : 'theirSoulPopup';
    dispatch(
      setCardListLoadFocus({
        query: popUpName,
        name: `${playerPronoun} Soul`
      })
    );
  };

  if (!hasSoul && soulCount != undefined && soulCount > 0) {
    setHasSoul(true);
  }

  return (
    <>
      {!!hasSoul && (
        <div
          title="Soul"
          className={styles.clickableItem}
          onClick={soulDisplay}
        >
          <GiAngelOutfit /> {soulCount}
        </div>
      )}
    </>
  );
};

const BloodDebtCount = (prop: Displayrow) => {
  const [hasBloodDebt, setHasBloodDebt] = useState(false);
  const dispatch = useAppDispatch();
  const { isPlayer } = prop;
  const bloodDebtCount = useAppSelector((state: RootState) =>
    isPlayer
      ? state.game.playerOne.bloodDebtCount
      : state.game.playerTwo.bloodDebtCount
  );
  const isImmune = useAppSelector((state: RootState) =>
    isPlayer
      ? state.game.playerOne.bloodDebtImmune
      : state.game.playerTwo.bloodDebtImmune
  );

  const BloodDebtDisplay = () => {
    const playerPronoun = isPlayer ? 'Your' : "Your Opponent's";
    const popUpName = isPlayer ? 'myBloodDebtPopup' : 'theirBloodDebtPopup';
    dispatch(
      setCardListLoadFocus({
        query: popUpName,
        name: `${playerPronoun} BloodDebt`
      })
    );
  };

  if (!hasBloodDebt && bloodDebtCount != undefined && bloodDebtCount > 0) {
    setHasBloodDebt(true);
  }

  const bloodDebtItem = classNames(
    { [styles.isRed]: !isImmune },
    styles.clickableItem
  );

  return (
    <>
      {!!hasBloodDebt ? (
        <div title="BloodDebt" className={bloodDebtItem}>
          <GiDrop /> {bloodDebtCount}
        </div>
      ) : (
        <div className={styles.item}> </div>
      )}
    </>
  );
};

export default ZoneCounts;
