function bounceOff(gameObj1, gameObj2, color) {
    if (gameObj1.x - gameObj2.x < gameObj2.width/2 + gameObj1.width/2
      && gameObj2.x - gameObj1.x < gameObj2.width/2 + gameObj1.width/2) {
        gameObj1.velocityX = gameObj1.velocityX * (-1);
        gameObj2.velocityX = gameObj2.velocityX * (-1);
        gameObj1.shapeColor = color;
        gameObj2.shapeColor = color;
    }
  
    else {
      gameObj1.shapeColor = "green";
      gameObj2.shapeColor = "green";
    }
    if (gameObj1.y - gameObj2.y < gameObj2.height/2 + gameObj1.height/2
      && gameObj2.y - gameObj1.y < gameObj2.height/2 + gameObj1.height/2){
        gameObj1.velocityY = gameObj1.velocityY * (-1);
        gameObj2.velocityY = gameObj2.velocityY * (-1);
        gameObj1.shapeColor = color;
        gameObj2.shapeColor = color;
    }
  
    else {
      gameObj1.shapeColor = "green";
      gameObj2.shapeColor = "green";
  
    }
  
  }

function isTouching(obj1, obj2) {

    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
        && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
          return true;
      }
    else {
        return false;
    }

    if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
        && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
          return true;
    }

    else {
        return false;
    }
}