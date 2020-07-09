const Storage = (() => {
  function currentScore(score) {
    localStorage.setItem('currentScore', JSON.stringify(score));
  }

  function getCurrentScore() {
    const getScore = JSON.parse(localStorage.getItem('currentScore'));
    return getScore;
  }

  function highScore(score) {
    localStorage.setItem('highestScore', JSON.stringify(score));
  }

  function getHighScore() {
    const getHigh = JSON.parse(localStorage.getItem('highestScore'));
    return getHigh;
  }


  function setAmmo(ammo) {
    localStorage.setItem('Ammunition', JSON.stringify(ammo));
  }

  function currentAmmo() {
    const ammo = JSON.parse(localStorage.getItem('Ammunition'));
    return ammo;
  }
  return {
    currentScore,
    getCurrentScore,
    highScore,
    getHighScore,
    setAmmo,
    currentAmmo,
  };
})();


module.exports = Storage;
