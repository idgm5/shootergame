import 'phaser';
import {
  Player,
  NewScore,
  PlayerLaser,
  ChaserShip,
  GunShip,
  CarrierShip
} from '../entities';

var score = JSON.parse(localStorage.getItem('currentScore'));
var scoreText;
var highText;
var timerText;
var stageText;
var ammoText;
var zero = 0;
var sec = 0;

const highestScore = JSON.parse(localStorage.getItem('highestScore'));

if (highestScore === null) {
  localStorage.setItem('highestScore', JSON.stringify(zero));
}

export default class ThirdStage extends Phaser.Scene {
  constructor() {
    super({
      key: "ThirdStage"
    });
  }

  preload() {
    this.load.image('deepspace-3', 'assets/Background-4.png')
  }

  create() {
    this.bg = this.add.image(240,320, 'deepspace-3');

    stageText = this.add.text(250, 16, 'Third Stage', {
      fontSize: '32px',
      fill: '#fff',
    });

    highText = this.add.text(16, 60, ' ', {
      fontSize: '16px',
      fill: '#fff'
    });
    scoreText = this.add.text(16, 16, ' ', {
      fontSize: '32px',
      fill: '#fff'
    });

    timerText = this.add.text(350, 60, ' ', {
      fontSize: '16px',
      fill: '#fff'
    });

    ammoText = this.add.text(330, 90, ' ', {
      fontSize: '16px',
      fill: '#fff'
    });

    this.anims.create({
      key: "sprEnemy0",
      frames: this.anims.generateFrameNumbers("sprEnemy0"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "sprEnemy2",
      frames: this.anims.generateFrameNumbers("sprEnemy2"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "sprExplosion",
      frames: this.anims.generateFrameNumbers("sprExplosion"),
      frameRate: 20,
      repeat: 0
    });
    this.anims.create({
      key: "sprPlayer",
      frames: this.anims.generateFrameNumbers("sprPlayer"),
      frameRate: 20,
      repeat: -1
    });

    this.sfx = {
      explosions: [
        this.sound.add("sndExplode0", {
          volume: 0.01,
        }),
        this.sound.add("sndExplode1", {
          volume: 0.01,
        })
      ],
      laser: this.sound.add("sndLaser", {
        volume: 0.01,
      })
    };
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprPlayer"
    );

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: 1000,
      callback: function() {
        var enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new GunShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        } else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("ChaserShip").length < 5) {

            enemy = new ChaserShip(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        } else {
          enemy = new CarrierShip(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }

        if (enemy !== null) {
          enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true
    });

    this.physics.add.collider(this.playerLasers, this.enemies, function(playerLaser, enemy) {

      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          enemy.onDestroy();
        }
        enemy.explode(true);
        playerLaser.destroy();
        score += 1;
        localStorage.setItem('currentScore', JSON.stringify(score));
        if (score > parseInt(highestScore)) {
          localStorage.setItem('highestScore', JSON.stringify(score));
        }
      }
    });

    this.physics.add.overlap(this.player, this.enemies, function(player, enemy) {
      if (!player.getData("isDead") &&
        !enemy.getData("isDead")) {
        player.explode(false);
        player.onDestroy();
        enemy.explode(true);
        stopTimer();
      }
    });

    this.physics.add.overlap(this.player, this.enemyLasers, function(player, laser) {
      if (!player.getData("isDead") &&
        !laser.getData("isDead")) {
        player.explode(false);
        player.onDestroy();
        laser.destroy();
        stopTimer();
      }
    });

    const nextScene = () => this.scene.start("SceneScores");

    sec = 10;
    //Add timer
    var timer = setInterval(function() {
      timerText.setText('Time Left: ' + sec);
      sec--;
      if (sec < 0) {
          nextScene();
          stopTimer();
        }
    }, 1000);

    function stopTimer() {
      clearInterval(timer);
    }
  }

  getEnemiesByType(type) {
    var arr = [];
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      if (enemy.getData("type") == type) {
        arr.push(enemy);
      }
    }
    return arr;
  }


  update() {
    const lasthigh = JSON.parse(localStorage.getItem('highestScore'));
    const currentAmmo = JSON.parse(localStorage.getItem('Ammunition'));

    highText.setText('Highest: ' + lasthigh);
    scoreText.setText('Score: ' + score);
    ammoText.setText('Ammunition: ' + currentAmmo);

    if(currentAmmo < zero){
      this.player.onDestroy();
      sec = 99999999999;
    }

    if (!this.player.getData("isDead")) {
      this.player.update();
      if (this.keyW.isDown) {
        this.player.moveUp();
      } else if (this.keyS.isDown) {
        this.player.moveDown();
      }
      if (this.keyA.isDown) {
        this.player.moveLeft();
      } else if (this.keyD.isDown) {
        this.player.moveRight();
      }

      if (this.keySpace.isDown) {
        this.player.setData("isShooting", true);
      } else {
        this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
        this.player.setData("isShooting", false);
      }
    }

    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];

      enemy.update();

      if (enemy.x < -enemy.displayWidth ||
        enemy.x > this.game.config.width + enemy.displayWidth ||
        enemy.y < -enemy.displayHeight * 4 ||
        enemy.y > this.game.config.height + enemy.displayHeight) {
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
          enemy.destroy();
        }
      }

    }

    for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
      var laser = this.enemyLasers.getChildren()[i];
      laser.update();
      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
      var laser = this.playerLasers.getChildren()[i];
      laser.update();
      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }
  }
}
