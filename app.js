import { BoatManager } from "./Actors/boatManager.js";
import { PlaneManager } from "./Actors/planeManager.js";
import { InputHandler } from "./utiles/io.js";
import { SeaData } from "./Data/seaData.js";
import { Score } from "./Actors/scoreManager.js";
import { Lives } from "./Actors/liveManager.js";
import { ParachuteManager } from "./Actors/parachuteManager.js";
import { BackgroundData } from "./Data/backgroundData.js";

window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.bm = new BoatManager(this); // need to do this to all classes
      this.pm = new PlaneManager(this);
      this.sea = new SeaData(this);
      this.bd = new BackgroundData(this);
      this.score = new Score(this);
      this.lives = new Lives(this);
      this.pam = new ParachuteManager();
      this.input = new InputHandler();
      this.gameOverIndication = false;
    }

    update() {
      this.bm.update(this.input.keys);
      this.pm.update();
      //   this.score.update(option);
      //   this.lives.update(option);
      this.pam.update(this.bm, this.pm, this.score, this.lives);
    }
    draw(context) {
      this.bd.draw(context);
      this.bm.draw(context);
      this.pm.draw(context);
      this.sea.draw(context);

      this.score.draw(context);
      this.gameOverIndication = this.lives.draw(context);
      this.pam.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    if (game.gameOverIndication) {
      game.gameOverIndication = false;
      location.reload();
    }
    requestAnimationFrame(animate);

    console.log(game.counter);
  }
  animate();
});
