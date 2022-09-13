const blockX = 50
const blockY = 50
const blockWidth = 30
const blockHeight = 30
const blockSpeedX = 1;
const blockSpeedY = 1;

function setup() 
{
    createCanvas(windowWidth, windowHeight);
}

function draw()
{
    background(0);
    fill(255, 255, 255);
    rect(blockX, blockY, blockWidth, blockHeight);
    blockX = blockX + blockSpeedX;
    if (blockX > width || blockX < 0) {
        blockSpeedX *= -1;
    }
}