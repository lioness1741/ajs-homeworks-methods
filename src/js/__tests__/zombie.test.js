import Zombie from "../zombie.js";

test('checking the creating of an instance Zombie', () => {
  expect(new Zombie('Zombie', 'Zombie', 10, 40, 100, 1)).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});