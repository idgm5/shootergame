import 'phaser';


export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" });
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, "SPACE TROOPER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    const play = document.createElement('div');
    play.innerHTML = `<button type='submit' id='play'
    style='background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 0.5rem;
    margin-left: 3.5rem;
    text-transform: uppercase;
    font-weight: bold;'>
    Start Game</button>`;
    this.add.dom(this.game.config.width * 0.5, this.game.config.height * 0.5, play, 'background-color: transparent; width: 220px; height: 0; font: 48px Arial');

    const top = document.createElement('div');
    top.innerHTML = `<button type='submit' id='topscores'
    style='background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 0.5rem;
    margin-left: 3.5rem;
    text-transform: uppercase;
    font-weight: bold;'>
    Top Scores</button>`;
    this.add.dom(this.game.config.width * 0.5, this.game.config.height * 0.7, top, 'background-color: transparent; width: 220px; height: 0; font: 48px Arial');

    const topBtn = document.getElementById('topscores');
    const playBtn = document.getElementById('play');

    playBtn.onclick = () => this.scene.start("SceneMain");
    topBtn.onclick = () => this.scene.start("SceneTopScores");
  }
}
