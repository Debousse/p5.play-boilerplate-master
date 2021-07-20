function preload(){
  bg = loadImage("iss.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
  brushImg = loadImage("brush.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  gym1Img = loadAnimation("gym1.png","gym2.png");
  gym2Img = loadAnimation("gym11.png","gym12.png");
  moveImg = loadAnimation("move.png","move1.png");
  sleepImg = loadImage("sleep.png");
}


function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.scale = 0.1
  astronaut.addImage(sleepImg);

  
}

function draw() {
  background(bg); 

  textSize(25);
  text("Instructions: ",17,24); 

  textSize(18);
  text("Up Arrow = Brushing",17,47); 

  textSize(18);
  text("Down Arrow = Exercising - Legs",17,70); 

  textSize(18);
  text("Right Arrow = Eating",17,93); 

  textSize(18);
  text("Left Arrow = Bathing",17,116); 

  textSize(18);
  text("M Key = Exercising - Arms",17,139); 

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("Brushing",brushImg);
    astronaut.changeAnimation("Brushing");
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Exercising",gym1Img);
    astronaut.changeAnimation("Exercising");
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Eating",eatImg);
    astronaut.changeAnimation("Eating");
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Bathing",bathImg);
    astronaut.changeAnimation("Bathing");
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }

  if (keyDown("M")){
    astronaut.addAnimation("Exercising1",gym2Img);
    astronaut.changeAnimation("Exercising1");
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }

  drawSprites();
}