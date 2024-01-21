export class PlaneManager {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 50;
    this.x = this.game.width - this.width;
    this.y = 0;
    this.image = document.getElementById("plane");
  }
  update() {
    this.x--;

    if (this.x < -this.width) {
      this.x = this.game.width - this.width;
    }
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
