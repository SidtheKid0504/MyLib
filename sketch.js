var fixedRect, movingRect, gameOb, gameOb2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameOb = createSprite(200, 600, 80, 30);
  gameOb.shapeColor = "green";
  gameOb2 = createSprite(300, 200, 100, 40);
  gameOb2.shapeColor = "green";



  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  

  gameOb.x = mouseX;
  gameOb.y = mouseY;

  bounceOff(movingRect, fixedRect, "blue");
  if (isTouching(gameOb, gameOb2)) {
    gameOb.shapeColor = "red";
    gameOb2.shapeColor = "red";
  }
  else {
    gameOb.shapeColor = "green";
    gameOb2.shapeColor = "green";
  }

  drawSprites();
}
