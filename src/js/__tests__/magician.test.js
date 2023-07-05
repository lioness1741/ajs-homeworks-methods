import Magician from "../magician.js";

test('checking the creating of an instance Magician', () => {
  expect(new Magician('Magician', 'Magician', 10, 40, 100, 1)).toEqual({
    name: 'Magician',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});