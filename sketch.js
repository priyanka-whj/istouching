var fixedRect, movingRect;
var fixedRect1;

function setup()
 {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  fixedRect1 = createSprite(300, 400, 60, 90);
  fixedRect1.shapeColor = "green";
}

function draw() 
{
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect, movingRect))
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(fixedRect1, movingRect))
      {
        movingRect.shapeColor = "blue";
        fixedRect1.shapeColor = "blue";
     }
     else
     {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
      fixedRect1.shapeColor = "green";
     }

  drawSprites();
}


