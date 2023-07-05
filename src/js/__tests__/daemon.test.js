import Daemon from "../daemon.js";

test('checking the creating of an instance Daemon', () => {
  expect(new Daemon('Daemon', 'Daemon', 10, 40, 100, 1)).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});