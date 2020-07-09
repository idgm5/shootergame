const SubmitScore = require('../modules/submitScore');

it('submits the player score to the leaderboard', () => {
  SubmitScore.send('PlayerOne', 0)
    .then((response) => {
      expect(response).toBe('Leaderboard score created correctly.');
    });
});
