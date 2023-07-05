import Undead from "../undead.js";

test('checking the creating of an instance Undead', () => {
  expect(new Undead('Undead', 'Undead', 10, 40, 100, 1)).toEqual({
    name: 'Undead',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});