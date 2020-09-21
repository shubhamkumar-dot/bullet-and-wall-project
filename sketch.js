var bullet,speed,weight;
var thickness,wall;
var damage;

function setup(){

  createCanvas(1600,400);

  speed = random(100,250);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(200,200,30,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "80,80,80";
}

function draw(){

  background(0);

  if(bullet.x - wall.x < bullet.width/2 + wall.width/2 &&
    wall.x - bullet.x < bullet.width/2 + wall.width/2 &&
    bullet.y - wall.y < bullet.height/2 + wall.height/2 &&
    wall.y - bullet.y < bullet.height/2 + wall.height/2 ){
      damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    }

    if(damage < 10){
      wall.shapeColor = "red";
    }

    if(damage > 10){
      wall.shapeColor = "green";
    }

  drawSprites();
}