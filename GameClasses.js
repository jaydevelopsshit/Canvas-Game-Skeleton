class GameObject {
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
    }

    update(ctx) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw(ctx);
    }
}

class GameRectangle extends GameObject {
    constructor(x, y, width, height, velocity) {
        super(x, y, velocity);
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}

class GameCircle extends GameObject {
    constructor(x, y, radius, velocity) {
        super(x, y, velocity);
        this.radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke()
    }
}

class Game {
    constructor(context, gameWidth, gameHeight, objectList) {
        this.ctx = context;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.objectList = objectList;
    }

    setStrokeColor(color) {
        this.ctx.strokeStyle = color;
    }

    addGameObject(object) {
        this.objectList.push(object);
    }

    draw() {
        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    }

    update() {
        this.draw();

        this.objectList.forEach(object => {
            object.update(this.ctx);
        });
    }
}