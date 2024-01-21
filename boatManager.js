export class BoatManager {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 50;
    this.x = this.game.width / 2;
    this.y = this.game.height - 2 * this.height; // inital value
    this.image = document.getElementById("boat");
  }
  update(input) {
    if (input.includes("ArrowRight")) {
      this.x++;
    } else if (input.includes("ArrowLeft")) {
      this.x--;
    }
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > this.game.width - this.width) {
      this.x = this.game.width - this.width;
    }
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
