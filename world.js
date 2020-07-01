var bird;
var pipes = [];
function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();
}

function draw() {

    background(255)

    if (frameCount % 150 == 0) { // every 150fps create another pipe
        pipes.push(new Pipe());
    }

    for (var pipe of pipes) { // loop through pipe array 
        pipe.show(); // once pipe is created, show it
        pipe.update();

        if (bird.touches(pipe)) {
            noLoop() // if loop detects bird touching pipe, stop looping and stop game
            console.log("GAME OVER")
        }

    }

    bird.show();
    bird.update();
}

function keyPressed() {
    if (key == ' ') { // the chosen key to make bird fly (letters must be upper case)
        bird.fly();
    }
}
