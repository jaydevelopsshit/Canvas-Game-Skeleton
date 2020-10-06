const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

const game = new Game(ctx, cvs.width, cvs.height, []);

setInterval(() => { game.update(); }, 10);
