export class ParachuteManager {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 50;
    //this.x = 0;
    this.y = 50; // planes height
    this.parachutes = [];
    this.alpahParam = 410; // heigher value - less parachutes
  }
  update(bm, pm, score, lives) {
    this.generateFall(pm);
    for (let i = 0; i < this.parachutes.length; i++) {
      console.log("alina arr size: ", this.parachutes.length);
      let par = this.parachutes[i];
      var status = par.update(bm.x);

      if (status === 2 || status === 1) {
        if (status === 2) {
          score.update("sub");
          lives.update("sub");
        } else {
          score.update("add");
        }
        // Remove the current 'par' from the array
        this.parachutes.splice(i, 1);
        i--;
      } else {
        score.update();
        lives.update();
      }
    }
  }
  draw(context) {
    for (let par of this.parachutes) {
      context.drawImage(par.image, par.x, par.y, this.width, this.height);
    }
  }
  generateFall(pm) {
    var ran = Math.floor(Math.random() * this.alpahParam) + 1; //
    if (ran < 4) {
      var parachute = new Parachute(pm.x, this.y);
      this.parachutes.push(parachute);
    }
  }
}

class Parachute {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = document.getElementById("parachute");
  }
  update(boatx) {
    var status = -1;
    if (this.y < 200) {
      status = 0;
    } else if (
      this.y >= 350 &&
      this.y <= 400 &&
      this.x >= boatx - 50 &&
      this.x <= boatx + 100
    ) {
      status = 1;
    } else if (this.y > 400) {
      status = 2;
    }

    this.y++;
    return status;
  }
}
