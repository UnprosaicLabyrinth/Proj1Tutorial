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
            --this.width;
            --this.height;
        }
        if (this.y >= (height - this.height) || this.y <= this.height) {
            if (this.speed_y > 0) {
                this.speed_y = -random(2, 7);
            } else {
                this.speed_y = random(2, 7); 
            }
            this.gray = random(256);
            --this.width;
            --this.height;
        }   
    }
}

const s = 10
let blocks = [];
let N = 200;

function setup() 
{
    createCanvas(windowWidth, windowHeight);
    background(0);
    /*
    for (let j = 0; j < N / 4; ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, 2 - (8 * j / N), 8 * j / N, 255);
    }
    for (let j = N / 4; j < N / 2; ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, -2 + (8 * j / N), -8 * j / N, 255);
    }
    for (let j = N / 2; j < 3 * (N / 4); ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, 2 - (8 * j / N), -8 * j / N, 255);
    }
    for (let j = 3 * (N / 4); j < N; ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, -2 + (8 * j / N), 8 * j / N, 255);
    }
    */
    for (let j = 0; j < N / 4; ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, 2 - (8 * j / N), 8 * j / N, 255);
    }
    for (let j = N / 4; j < N / 2; ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, -2 + (8 * (j - (N / 4)) / N), -8 * (j - (N / 4)) / N, 255);
    }
    for (let j = N / 2; j < 3 * (N / 4); ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, 2 - (8 * (j - (N / 2)) / N), -8 * (j - (N / 2)) / N, 255);
    }
    for (let j = 3 * (N / 4); j < N; ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, -2 + (8 * (j - (3 * N / 4)) / N), 8 * (j - (3 * N / 4)) / N, 255);
    }
    /*
    for (let j = 0; j < N / 4; ++j) {
        blocks[j] = new Block(width / 2, height / 2, s, s, 2 - (8 * j / N), 2 - (8 * j / N), 255);
        blocks[j + (N / 4)] = new Block(width / 2, height / 2, s, s, -2 + (8 * j / N), 2 - (8 * j / N), 255);
        blocks[j + (N / 2)] = new Block(width / 2, height / 2, s, s, 2 - (8 * j / N), -2 + (8 * j / N), 255);
        blocks[j + (3 * N / 4)] = new Block(width / 2, height / 2, s, s, -2 + (8 * j / N), -2 + (8 * j / N), 255);
    }
    */
}

function draw()
{
    for (let i = 0; i < N; i++) {
        blocks[i].display();
        blocks[i].mad_move();
    }
}