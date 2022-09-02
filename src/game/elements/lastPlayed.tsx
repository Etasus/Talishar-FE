import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import styles from './LastPlayed.module.css';

export default function LastPlayed() {
  let lastCard = useSelector(
    (state: RootState) => state.game.gameInfo.lastPlayed
  );

  if (lastCard === undefined) {
    lastCard = {
      cardNumber: 'CardBack'
    };
  }

  const src = `https://www.fleshandbloodonline.com/FaBOnline/WebpImages/${lastCard.cardNumber}.webp`;

  return (
    <div className={styles.lastPlayed}>
      <img src={src} className={styles.img} />
    </div>
  );
}
