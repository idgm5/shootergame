import 'phaser';
import config from '../Config/config';

async function getScores() {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mFO8zw10kyIoLrMFk2KV/scores/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}

const allScores = getScores();

export default class SceneTopScores extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneTopScores"
    });
  }

  create() {
    this.bg = this.add.image(240,320, 'deepspace-menu');
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.W);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.S);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.A);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.D);

    this.title = this.add.text(this.game.config.width * 0.5, 128, "TOP SCORES", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    const div = document.createElement('div');
    div.innerHTML = `<button type='submit' id='backtomenu'
    style='background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 0.5rem;
    margin-left: 3.5rem;
    text-transform: uppercase;
    font-weight: bold;'>
    Back To Menu</button>`;
    this.add.dom(this.game.config.width * 0.45, this.game.config.height * 0.8, div, 'background-color: transparent; width: 220px; height: 0; font: 48px Arial');

    const btn = document.getElementById('backtomenu');
    btn.onclick = () => this.scene.start("SceneMainMenu");
  }

  update(){
    allScores.then((response) => {
      var results = response.result;
      results.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
      var height = 0.3;
      results.slice(0, 5).forEach((result) => {
        this.add.text(this.game.config.width * 0.3, this.game.config.height * height, `${result.user}: ${result.score}`, {
          fontFamily: 'monospace',
          fontSize: 32,
          fontStyle: 'bold',
          color: '#ffffff',
          align: 'center'
        });
        height += 0.1;
      });
    });
  }
}
