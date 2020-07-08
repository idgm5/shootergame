# Space Trooper
A space shooter game that only takes a few seconds to start playing, which also allows you to share your score with your friends in an online leader board.

## Instructions to run the project

+ Open terminal on your workspace with
```
cd /home/projects_workspace/..
```
+ Cloning the project input the next code:
```
git clone git@github.com:idgm5/shootergame.git
```
+ Navigate to the folder of the project
```
cd /shootergame/
```
Run  `npm install --global http-server` and then `http-server ./` finally open your web browser at `http://localhost:8080/`

## Demo

[Hosted on Heroku](http://startrooper.herokuapp.com/)

## Screenshot
![image](https://i.imgur.com/37lduuC.png)

## Instructions to run the tests

- Open terminal on your workspace with

```
cd /home/projects_workspace/..
```

- Install dependencies

```
npm install
```

- Install Jest

```
npm install --save-dev jest
```

- Install Babel

```
npm i -D @babel/preset-env
```

- Run the tests

```
npm test
```

## Game Design Document

-   Genre
    -----------------------

- A SPACER SHOOTER GAME

-   Core Gameplay Mechanics 
    ------------------------

1.  Shoot enemies to get points

2.  Beat your previous highest score

3.  Send your score to an online leaderboard

-   Targeted platforms
    ------------------

1.  Web Browser (PC ONLY)

-   Project Scope 
    --------------

1.  Development Resources

-   No incurring costs in money

-   5-6 days from development to launch.

2.  Phase3 Developer License

3.  Heroku Hobby Dyno

-   Influences
    ------------------

1.  Starwars

-   Movies

-   The game is inspired in the storm trooper's missions during the clone wars era.

2.  EVE: Gunjack

-   Games

-   The game involves a scoring system that ranks the players based on performance.

3.  Elite Dangerous

-   Games

-   The player is free to roam around the space, encountering enemies in unexpected star systems.

-   The Elevator Pitch
    ------------------
- A space shooter game that only takes a few seconds to start playing, and you can share your score with your friends in an online leaderboard. 

-   Project Description
    ---------------------------

- A JavaScript game made with Phaser 3 Engine that can be played in any web browser as long as there's a keyboard available.

What sets this project apart?
=============================

1.  It's a JS game in the browser. 

2.  No need to learn any rules to play. 

3.  You can share your score with other players.

-   Core Gameplay Mechanics
    ----------------------------------

1.  Shoot enemies to get points

-   Any destroyed enemy rewards the player with one point. 

-   The player can shoot them using the spacebar 

2.  Beat your previous highest score

-   A Player's score is recorded locally in the browser and is compared to previous scores. 

-   If the players beat their previous score then it will be saved as the highest score to date. 

3.  Send your score to an online leaderboard

-   Players have the option to send their scores after each session.

Story and Gameplay
==================

-   Story
    -----

1.  You are part of the Distant Worlds Expedition Unit (DWEU) with the purpose to protect the expeditionaries while they collect data from potential colonial planets in the Oevasy SG-Y d0 system at a distance of 65,647.34 LY from the solar system. Creating an impossible situation to receive supplies or reinforcements in case you find yourself with no ammunition or fuel to continue your mission.

-   Gameplay
    ----------------

1.  The player has to survive in three different scenarios with a time set and limited ammunition per scene at the same time scores as many points as it can. 

2.  The game finishes when the player completes the last scenario or receives an impact from the enemies.

Assets Needed
=============

-   2D
    --

1.  Textures

-   Player ship

-   Enemies ships

-   Expeditionaries ships

-   Laser beams

2.  Backgrounds

-   Planetary and deep space backgrounds.

-   Sound
    -----

1.  Sound List

-   Laser beams

-   Impact sound

-   Shoot sound

-   Explosion

-   Impact sound

-   Buttons Click

-   Play button effect

-   Code
    ----

1.  Phase 3 Engine

2.  Webpack 

3.  HTML Index page

4.  Jest 

5.  JS Modules

-   Game scenarios 

-   Game testings

Schedule
========

-   Base Game Concept
    -----------------

-   4 hours

-   Finish one simple scenario

-   Gameover scene

-   Record scores

-   Design Game
    -----------

-   4 hours

-   Add custom textures to the game

-   Create 3 playable scenarios

-   Add time and limited ammunition per scenario

-   Story scenes
    ------------

-   2 hours

-   Add an intro about the player's mission. 

-   Add some context between scenes. 

-   Give a bad and a good ending scene.

-   Submit scores and testing
    -------------------------

-   8 hours

-   Use the API provided to submit scores. 

-   Add a leaderboard. 

-   Create the JEST testings.

## Author

👤 **Isaac Gonzalez**

- Github: [@idgm5](https://github.com/idgm5)
- Twitter: [@idgm5](https://twitter.com/idgm5)
- Linkedin: [Isaac Gonzalez](https://www.linkedin.com/in/isaacmunguia)


## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues](https://github.com/enelesmai/enumerable-methods/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgements

+ [Github](http://github.com/).
+ [The Odin Project](theodinproject.com/).
+ Alec Markarian, Benjamin Stanley, and Brandon Fedie. - Providing a GDD Template.
## License

This project is [MIT](lic.url) licensed.
