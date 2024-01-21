export class Lives {
  constructor(game) {
    this.game = game;
    this.x = 3;
    this.y = this.game.height / 2 + 25;
    this.text = "";
    this.lives = 5;
    this.gameOver = false;
    this.gameOverText = "game over ! starting again";
  }
  update(option) {
    var template = "Lives: ";
    if (option === "sub") {
      this.lives = this.lives - 1;
    }
    this.text = template + this.lives.toString();
    if (this.lives === 0) {
      this.gameOver = true;
    }
  }
  draw(context) {
    if (!this.gameOver) {
      context.font = "20px georgia";
      context.fillText(this.text, this.x, this.y);
      return false;
    } else {
      context.font = "50 px georgia";
      context.fillText(this.gameOverText, 250, this.y);
      this.gameOver = false;
      return true;
    }
  }
}
