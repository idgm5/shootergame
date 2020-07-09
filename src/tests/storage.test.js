const Storage = require('../modules/storage');

it('saves current score', () => {
  Storage.currentScore("0");
  expect(JSON.parse(localStorage.getItem('currentScore'))).toBe("0");
});

it('gets current score', () => {
  localStorage.setItem('currentScore', JSON.stringify("0"));
  expect(Storage.getCurrentScore()).toBe("0");
});

it('saves current highScore', () => {
  Storage.highScore("0");
  expect(JSON.parse(localStorage.getItem('highestScore'))).toBe("0");
});

it('gets current highScore', () => {
  localStorage.setItem('highestScore', JSON.stringify("0"));
  expect(Storage.getHighScore()).toBe("0");
});

it('set current ammunition', () => {
  Storage.setAmmo("0");
  expect(JSON.parse(localStorage.getItem('Ammunition'))).toBe("0");
});

it('gets current ammunition', () => {
  localStorage.setItem('Ammunition', JSON.stringify("0"));
  expect(Storage.currentAmmo()).toBe("0");
});
