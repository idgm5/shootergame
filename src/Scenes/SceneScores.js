/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */


import 'phaser';
import config from '../Config/config';

const SubmitScore = require('../modules/submitScore');
const Storage = require('../modules/storage');

const zero = 0;

export default class SceneScores extends Phaser.Scene {
  constructor() {
    super({
      key: 'SceneScores',
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
    const name = document.getElementById('tag');
    btn.onclick = () => SubmitScore.send(tag.value, currentScore).then(this.scene.start('SceneMainMenu'));

    const currentScore = Storage.getCurrentScore();
    const lasthigh = Storage.getHighScore();

    this.score = this.add.text(this.game.config.width * 0.5, 128, ' ', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.score.setOrigin(0.5, -1);
    this.score.setText(`SCORE: ${currentScore}`);

    this.high = this.add.text(this.game.config.width * 0.15, this.game.config.height * 0.4, ' ', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.high.setText(`HIGHEST: ${lasthigh}`);
  }

  update() {
    const leftAmmo = Storage.currentAmmo();
    if (leftAmmo <= zero) {
      this.title = this.add.text(this.game.config.width * 0.5, 128, 'NO AMMO LEFT', {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });
      this.title.setOrigin(0.5);
    } else {
      this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });
      this.title.setOrigin(0.5);
    }
  }
}
