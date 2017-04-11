var x = 300;
var speed = 13;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(101, 244, 66);
    display();
    move();
    bounce();
}

function display(){
    //display ball
    stroke(100);
    strokeWeight(7);
    fill(65, 89, 244);
    ellipse(x, 200, 50, 50);
}

function move(){
     //ball move
    x = x + speed;
}
function bounce(){
    //ball changes direction when it hits wall
    if(x > 600 || x < 0){
        speed = -speed;
    }
}