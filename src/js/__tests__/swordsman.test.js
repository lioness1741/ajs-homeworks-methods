import Swordsman from "../swordsman.js";

test('checking the creating of an instance Swordsman', () => {
  expect(new Swordsman('Swordsman', 'Swordsman', 10, 40, 100, 1)).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});