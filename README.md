# Canvas-Game-Skeleton
A template from which you can easily use the HTML5 canvas with.

# Example Usage

HTML <br>
`<canvas id="canvas"></canvas>` <br>
JS
```
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d"); 

const game = new Game(ctx, cvs.width, cvs.height, []);

game.addGameObject(new GameRectangle(10, 10, 20, 20, { x: 0, y: 0 }));

setInterval(() => { game.update(); }, 10);
```
