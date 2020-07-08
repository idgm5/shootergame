import 'phaser';
import config from '../Config/config';

async function sendScore(name, score) {
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

var zero = 0;
const currentScore = JSON.parse(localStorage.getItem('currentScore'));;

export default class SceneScores extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneScores"
    });
  }

  create() {
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.W);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.S);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.A);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.D);

    const div = document.createElement('div');
    div.innerHTML = `<input type='search' placeholder='Write your name' id='tag'
    style="background: transparent;
    color: white;
    border: 2px solid;
    padding: 0.5rem;"/>
    <button type='submit' id='button'
    style='background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 0.5rem;
    margin-left: 3.5rem;
    text-transform: uppercase;
    font-weight: bold;'>
    Send Score</button>`;
    this.add.dom(this.game.config.width * 0.5, this.game.config.height * 0.6, div, 'background-color: transparent; width: 220px; height: 0; font: 48px Arial');

    const btn = document.getElementById('button');
    var name = document.getElementById('tag');
    btn.onclick = () => sendScore(tag.value, currentScore).then(this.scene.start("SceneMainMenu"));

    const currentScore = JSON.parse(localStorage.getItem('currentScore'));
    const lasthigh = JSON.parse(localStorage.getItem('highestScore'));

    this.score = this.add.text(this.game.config.width * 0.5, 128, " ", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });

    this.score.setOrigin(0.5, -1);
    this.score.setText('SCORE: ' + currentScore);

    this.high = this.add.text(this.game.config.width * 0.15, this.game.config.height * 0.4, " ", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.high.setText('HIGHEST: ' + lasthigh);

  }

  update(){
    const leftAmmo = JSON.parse(localStorage.getItem('Ammunition'))
    if(leftAmmo <= zero){
      this.title = this.add.text(this.game.config.width * 0.5, 128, "NO AMMO LEFT", {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.title.setOrigin(0.5);
    } else {
      this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.title.setOrigin(0.5);
    }
  }
}
