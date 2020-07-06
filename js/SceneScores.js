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

const currentScore = JSON.parse(localStorage.getItem('currentScore'));

class SceneScores extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneScores"
    });
  }
  create() {

    const div = document.createElement('div');
    div.innerHTML = `<input type='search' placeholder='Name or GamerTag' /><button type='submit' id='button'>Submit</button>`;
    this.add.dom(this.game.config.width * 0.7, 250, div);

    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnRestart"
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on("pointerover", function() {
      this.btnRestart.setTexture("sprBtnRestartHover"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnRestart.on("pointerout", function() {
      this.setTexture("sprBtnRestart");
    });

    this.btnRestart.on("pointerdown", function() {
      this.btnRestart.setTexture("sprBtnRestartDown");
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on("pointerup", function() {
      this.btnRestart.setTexture("sprBtnRestart");
      this.scene.start("SceneMain");
    }, this);

    this.backgrounds = [];
    for (var i = 0; i < 5; i++) {
      var keys = ["sprBg0", "sprBg1"];
      var key = keys[Phaser.Math.Between(0, keys.length - 1)];
      var bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }



    // const btn = document.getElementById('button');
    // btn.onclick = () => sendScore(form[0].value, currentScore);

  }

  update() {
    const currentScore = JSON.parse(localStorage.getItem('currentScore'));
    const lasthigh = JSON.parse(localStorage.getItem('highestScore'));

    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
    this.score = this.add.text(this.game.config.width * 0.5, 128, " ", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });

    this.score.setOrigin(0.5, -1);
    this.score.setText('SCORE: ' + currentScore);

    this.high = this.add.text(this.game.config.width * 0.5, 128, " ", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.high.setOrigin(0.5, -4);
    this.high.setText('HIGHEST: ' + lasthigh);
  }

}
