import { array, boolean, object, string, number } from 'yup';

export const deckValidation = (minDeckSize: number, maxDeckSize: number) => {
  return object({
    // maximum of two 1H items, or one 2H item.
    weapons: array()
      .required()
      .min(1, 'Pick at least one weapon.')
      .of(
        object().shape({
          id: string().required(),
          is1H: boolean(),
          numHands: number()
        })
      )
      // Test that the sum of weapons.hands is less than 2. And hope LSS don't introduce heroes with only 1 hand, or 3 hands.
      .test('hands', 'Your hero only has two hands.', (weapons = []) => {
        const numHands = weapons.reduce((total, row) => {
          return total + (row.numHands ?? 0);
        }, 0);
        return numHands <= 2;
      }), // maximum 2 hand-objects
    head: string().required('You must have head equipment.'),
    chest: string().required('You must have chest equipment.'),
    arms: string().required('You must have arms equipment.'),
    legs: string().required('You must have legs equipment.'),
    deck: array()
      .required()
      .of(string())
      .min(minDeckSize, `Minimum deck size is ${minDeckSize} cards.`)
      .max(maxDeckSize, `Maximum deck size is ${maxDeckSize} cards.`)
  });
};

export default deckValidation;
