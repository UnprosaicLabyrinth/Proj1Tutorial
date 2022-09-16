class Ball
{
    constructor(x, y, radius, speed_x, speed_y, gray)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed_x = speed_x;
        this.speed_y = speed_y;
        this.gray = gray;
    }

    display()
    {
        fill(this.gray);
        circle(this.x, this.y, this.radius);
    }

    move()
    {
        this.x += this.speed_x;
        this.y += this.speed_y;
        if (this.x >= (width - this.radius) || this.x <= this.radius ||
            this.y >= (height - this.radius) || this.y <= this.radius) {
            this.speed_x *= -1;
        }
    }

    mad_move()
    {
        this.x += this.speed_x;
        this.y += this.speed_y;
        if (this.x >= (width - this.radius) || this.x <= this.radius) {
            if (this.speed_x > 0) {
                this.speed_x = -random(2, 7);
            } else {
                this.speed_x = random(2,7); 
            }
            this.gray = random(256)
            --this.radius;
        }
        if (this.y >= (height - this.radius) || this.y <= this.radius) {
            if (this.speed_y > 0) {
                this.speed_y = -random(2, 7);
            } else {
                this.speed_y = random(2, 7); 
            }
            this.gray = random(256);
            --this.radius;
        }   
    }
}

const r = 10
let balls = [];
let N = 200;

function setup() 
{
    createCanvas(windowWidth, windowHeight);
    background(0);
    for (let j = 0; j < N / 4; ++j) {
        balls[j] = new Ball(width / 2, height / 2, r, 2 - (8 * j / N), 8 * j / N, 255);
    }
    for (let j = N / 4; j < N / 2; ++j) {
        balls[j] = new Ball(width / 2, height / 2, r, -2 + (8 * (j - (N / 4)) / N), -8 * (j - (N / 4)) / N, 255);
    }
    for (let j = N / 2; j < 3 * (N / 4); ++j) {
        balls[j] = new Ball(width / 2, height / 2, r, 2 - (8 * (j - (N / 2)) / N), -8 * (j - (N / 2)) / N, 255);
    }
    for (let j = 3 * (N / 4); j < N; ++j) {
        balls[j] = new Ball(width / 2, height / 2, r, -2 + (8 * (j - (3 * N / 4)) / N), 8 * (j - (3 * N / 4)) / N, 255);
    }
}

function draw()
{
    for (let i = 0; i < N; i++) {
        balls[i].display();
        balls[i].mad_move();
    }
}