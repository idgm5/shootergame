import 'phaser';

export default class SceneIntro extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneIntro"
    });
  }

  create() {
    this.bg = this.add.image(240,320, 'deepspace-menu');
    const div = document.createElement('div');
    div.innerHTML = `<p
    style=" color: white;
    font-size: 15px;
    text-align:justify;
    width: 420px;
    line-height: 1.25rem;
    font-weight: bold;
    margin: 15px 0 0px 0;"
    />
    Greetings Commander,
    <br/>
    As a member of the Distant Worlds Expedition Unit (DWEU), you have the responsibility to protect and secure the expeditionary fleet from any pirate, mercenary, or enemy of the federation.
    <br/>
    <br/>
    The mission will take place in the Oevasy SG-Y d0 system at a distance of 65,647.34 LYs from the solar system.
    <br/>
    <br/>
    These create an impossible situation to support your mission with ammunition supplies or reinforcements.
    <br/>
    <br/>
    You have to be thoughtful when choosing your targets, and once you decided an objective, shoot with your laser cannons.
    <br/>
    <br/>
    Remember Commander that your ship will be flying at supercruise speed, so there's no reason to eliminate all the targets in space, you still keep the control of your spaceship to pitch and yaw during supercruise.
    <br/>
    <br/>
    I wish you good luck on your mission, and god bless the federation with your success.
    <br/>
    <br/>
    John Cruze,
    <br/>
    Rear Admiral Of The Federation
    <br/>
    <br/>
    Pitch/Yaw: [W] [S] [A] [D] - Laser: [SPACEBAR]
    </p>

    <button type='submit' id='button'
    style='background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 0 7rem;
    margin-left: 3.5rem;
    text-transform: uppercase;
    font-weight: bold;'>
    Start Mission</button>`;
    this.add.dom(this.game.config.width * 0.3, this.game.config.height * 0, div, 'background-color: transparent; width: 220px; height: 0; font: 48px Arial');

    const btn = document.getElementById('button');
    btn.onclick = () => this.scene.start("SceneMain");

  }
}
