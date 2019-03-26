import setUpAttacks from '../src/js/setUpAttacks';

test('test 1', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](10);
  const received = characters;
  const expected = [
    { name: 'маг', health: 97 },
    { name: 'лучник', health: 76 },
    { name: 'мечник', health: 7 },
  ];
  expect(received).toEqual(expected);
});

test('test 2', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters, false);
  attacks[2](11);
  const received = characters;
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 0 },
  ];
  expect(received).toEqual(expected);
});

test('test 3', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](100);
  const received = characters;
  const expected = [
    { name: 'маг', health: 67 },
    { name: 'лучник', health: 46 },
    { name: 'мечник', health: 0 },
  ];
  expect(received).toEqual(expected);
});

test('test 4', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 0 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](33);
  const received = characters;
  const expected = [
    { name: 'маг', health: 84 },
    { name: 'лучник', health: 63 },
    { name: 'мечник', health: 0 },
  ];
  expect(received).toEqual(expected);
});
