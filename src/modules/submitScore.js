const SubmitScore = (() => {
  async function send(name, score) {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mFO8zw10kyIoLrMFk2KV/scores/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user": name,
        "score": score
      })
    });
    const data = await response.json();
    console.log("SUCCESS!");
  }
  return {
    send
  };
})();


module.exports = SubmitScore;
