const GetScore = (() => {
  async function all() {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mFO8zw10kyIoLrMFk2KV/scores/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  return {
    all,
  };
})();


module.exports = GetScore;
