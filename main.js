const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

const game = new Game(ctx, cvs.width, cvs.height, []);
game.addGameObject(new GameRectangle(20, 20, 40, 40, { x: 1, y: 0 }));

setInterval(() => { game.update(); }, 10);