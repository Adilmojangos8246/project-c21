var bullet,wall;
var speed,weight;
var thickness
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  //for creating variablaes
  bullet = createSprite(50, 200, 50, 50)
  wall = createSprite(800, 200, 60, height/2)
 
  speed = random(59,90)
  weight = random(400,1500)

  //for giving velocityww
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  var def = 0.5  * speed * speed / 22500  

  if(wall.x-bullet.x < (bullet.width +wall.width )/2){
      bullet.velocityX = 0;
    if (def > 180){
       bullet . shapeColor = color(250,0,0);
    }
    if (def < 180 && def >100){
      bullet.shapeColor = color = (230,230,0)
    }
    if (def<100){
      bullet.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}