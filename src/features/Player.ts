import Card from './Card';

export default interface Player {
  HeadEq?: Card;
  ChestEq?: Card;
  GlovesEq?: Card;
  FeetEq?: Card;
  WeaponLEq?: Card;
  Hero?: Card;
  WeaponREq?: Card;
  Health?: number;
  ActionPoints?: number;
  PitchRemaining?: number;
  Hand?: Card[];
  Arsenal?: Card[];
  Banish?: Card[];
  Graveyard?: Card[];
  Pitch?: Card[];
  DeckSize?: number;
  Name?: string;
  IsVerified?: boolean;
  Effects?: Card[];
  Permanents?: Card[];
}