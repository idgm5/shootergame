import 'phaser';
import config from './Config/config';
import SceneMain from './Scenes/SceneMain';
import SceneMainMenu from './Scenes/SceneMainMenu';
import SceneScores from './Scenes/SceneScores';
import SceneTopScores from './Scenes/SceneTopScores';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('SceneTopScores', SceneTopScores);
    this.scene.add('SceneScores', SceneScores);
    this.scene.add('SceneMainMenu', SceneMainMenu);
    this.scene.add('SceneMain', SceneMain);
    this.scene.start('SceneMainMenu');
  }
}

window.game = new Game();
