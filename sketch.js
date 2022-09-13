const s = 5

class Block
{
    constructor(x, y, width, height, speed_x, speed_y, gray)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed_x = speed_x;
        this.speed_y = speed_y;
        this.gray = gray;
    }

    display()
    {
        fill(this.gray);
        rect(this.x, this.y, this.width, this.height);
    }

    move()
    {
        this.x += this.speed_x;
        this.y += this.speed_y;
        if (this.x >= (width - this.width) || this.x <= this.width) {
            this.speed_x *= -1;
        }
        if (this.y >= (height - this.height) || this.y <= this.height) {
            this.speed_y *= -1;
        }
    }

    mad_move()
    {
        this.x += this.speed_x;
        this.y += this.speed_y;
        if (this.x >= (width - this.width) || this.x <= this.width) {
            if (this.speed_x > 0) {
                this.speed_x = -random(2, 7);
            } else {
                this.speed_x = random(2,7); 
            }
            this.gray = random(256)
        }
        if (this.y >= (height - this.height) || this.y <= this.height) {
            if (this.speed_y > 0) {
                this.speed_y = -random(2, 7);
            } else {
                this.speed_y = random(2, 7); 
            }
            this.gray = random(256);
        }   
    }
}

function setup() 
{
    createCanvas(windowWidth, windowHeight);
    background(0);
}


let blocks = [];
dir = 1
for (let i = 0; i < 201; i++) {
    if (dir == 1) {
        blocks[i] = new Block(200, 100, s, s, -2, 2, 255);
        dir = 2;
    } else if (dir == 2) {
        blocks[i] = new Block(800, 100, s, s, 2, 2, 255);
        dir = 3;
    } else if (dir == 3) {
        blocks[i] = new Block(800, 400, s, s, 2, -2, 255);
        dir = 4;
    } else {
        blocks[i] = new Block(200, 400, s, s, -2, -2, 255);
        dir = 1;
    }
}

function draw()
{
    for (let i = 0; i < dir; i++) {
        blocks[i].display();
        blocks[i].mad_move();
    }
    dir++;
    if (dir > 200) {
        dir = 1;
    }
}