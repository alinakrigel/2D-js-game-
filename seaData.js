export class SeaData {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = 50;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.image = document.getElementById("sea");
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
