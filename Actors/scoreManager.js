export class Score {
  constructor(game) {
    this.game = game;
    this.x = 3;
    this.y = this.game.height / 2;
    this.text = "";
    this.template = "Score: ";
    this.score = 0;
  }
  update(option) {
    if (option === "add") {
      this.score = this.score + 10;
    } else if (option === "sub") {
      this.score = this.score - 1;
    }
    this.text = this.template + this.score.toString();
  }
  draw(context) {
    context.font = "20px georgia";
    context.fillText(this.text, this.x, this.y);
  }
}
