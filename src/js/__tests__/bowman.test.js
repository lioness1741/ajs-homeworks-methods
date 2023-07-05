import Bowman from "../bowman.js";

test('checking the creating of an instance Bowman', () => {
  expect(new Bowman('Bowman', 'Bowman', 25, 25, 100, 1)).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});