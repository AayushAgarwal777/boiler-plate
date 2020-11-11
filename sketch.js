function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(600, 400, 50, 100);
  rect1.shapeColor="black";
  rect1.debug=true;

  rect2 = createSprite(400,200,80,30);
  rect2.shapeColor="white";
  rect2.debug=true;
}

function draw() {
  background("lightblue");  
  drawSprites();

  rect2.x=World.mouseX;
  rect2.y=World.mouseY;

  if(rect1.x-rect2.x < rect1.width/2+rect2.width/2
    && rect2.x-rect1.x < rect1.width/2+rect2.width/2
    && rect1.y-rect2.y < rect2.height/2+rect1.height/2
    && rect2.y-rect1.y < rect1.height/2+rect1.height/2){
    rect1.shapeColor="red";
    rect2.shapeColor="red";
  }
  else{
    rect1.shapeColor="black";
    rect2.shapeColor="white";
  }
}