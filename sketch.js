blockX = 50
blockY = 50
blockWidth = 30
blockHeight = 30
blockSpeedX = 1;
blockSpeedY = 1;

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